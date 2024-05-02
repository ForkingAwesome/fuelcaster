contract;

mod errors;

use errors::{MintError};

use src20::SRC20;
use src3::SRC3;
use asset::{
    base::{
        _decimals,
        _name,
        _set_decimals,
        _set_name,
        _set_symbol,
        _symbol,
        _total_assets,
        _total_supply,
        SetAssetAttributes,
    },
    mint::{
        _burn,
        _mint,
    },
};
use std::{call_frames::contract_id, hash::Hash, storage::storage_string::*, string::String};

storage {
    /// The total number of unique assets minted by this contract.
    total_assets: u64 = 0,
    /// The total number of coins minted for a particular asset.
    total_supply: StorageMap<AssetId, u64> = StorageMap {},
}

configurable {
    /// The total supply of coins for the asset minted by this contract.
    TOTAL_SUPPLY: u64 = 100_000_000,
    /// The decimals of the asset minted by this contract.
    DECIMALS: u8 = 9u8,
    /// The name of the asset minted by this contract.
    NAME: str[7] = __to_str_array("Vadapav"),
    /// The symbol of the asset minted by this contract.
    SYMBOL: str[5] = __to_str_array("VDPAV"),
}

impl SRC20 for Contract {
    /// Returns the total number of individual assets minted by a contract.
    ///
    /// # Additional Information
    ///
    /// For this single asset contract, this is always one.
    ///
    /// # Returns
    ///
    /// * [u64] - The number of assets that this contract has minted.
    ///
    /// # Examples
    ///
    /// ```sway
    /// use src20::SRC20;
    ///
    /// fn foo(contract_id: ContractId) {
    ///     let src_20_abi = abi(SRC20, contract_id);
    ///     let assets = src_20_abi.total_assets();
    ///     assert(assets == 1);
    /// }
    /// ```
    #[storage(read)]
    fn total_assets() -> u64 {
        1
    }

    /// Returns the total supply of coins for the asset.
    ///
    /// # Arguments
    ///
    /// * `asset`: [AssetId] - The asset of which to query the total supply, this should be the default `SubId`.
    ///
    /// # Returns
    ///
    /// * [Option<u64>] - The total supply of an `asset`.
    ///
    /// # Examples
    ///
    /// ```sway
    /// use src20::SRC20;
    /// use std::constants::DEFAULT_SUB_ID;
    ///
    /// fn foo(contract_id: ContractId) {
    ///     let src_20_abi = abi(SRC20, contract_id);
    ///     let supply = src_20_abi.total_supply(DEFAULT_SUB_ID);
    ///     assert(supply.unwrap() != 0);
    /// }
    /// ```
    #[storage(read)]
    fn total_supply(asset: AssetId) -> Option<u64> {
        if asset == AssetId::default() {
            Some(TOTAL_SUPPLY)
        } else {
            None
        }
    }

    /// Returns the name of the asset.
    ///
    /// # Arguments
    ///
    /// * `asset`: [AssetId] - The asset of which to query the name, this should be the default `SubId`.
    ///
    /// # Returns
    ///
    /// * [Option<String>] - The name of `asset`.
    ///
    /// # Examples
    ///
    /// ```sway
    /// use src20::SRC20;
    /// use std::constants::DEFAULT_SUB_ID;
    ///
    /// fn foo(contract_id: ContractId) {
    ///     let src_20_abi = abi(SRC20, contract_id);
    ///     let name = src_20_abi.name(DEFAULT_SUB_ID);
    ///     assert(name.is_some());
    /// }
    /// ```
    #[storage(read)]
    fn name(asset: AssetId) -> Option<String> {
        if asset == AssetId::default() {
            Some(String::from_ascii_str(from_str_array(NAME)))
        } else {
            None
        }
    }

    /// Returns the symbol of the asset.
    ///
    /// # Arguments
    ///
    /// * `asset`: [AssetId] - The asset of which to query the symbol, this should be the default `SubId`.
    ///
    /// # Returns
    ///
    /// * [Option<String>] - The symbol of `asset`.
    ///
    /// # Examples
    ///
    /// ```sway
    /// use src20::SRC20;
    /// use std::constants::DEFAULT_SUB_ID;
    ///
    /// fn foo(contract_id: ContractId) {
    ///     let src_20_abi = abi(SRC20, contract_id);
    ///     let symbol = src_20_abi.symbol(DEFAULT_SUB_ID);
    ///     assert(symbol.is_some());
    /// }
    /// ```
    #[storage(read)]
    fn symbol(asset: AssetId) -> Option<String> {
        if asset == AssetId::default() {
            Some(String::from_ascii_str(from_str_array(SYMBOL)))
        } else {
            None
        }
    }

    /// Returns the number of decimals the asset uses.
    ///
    /// # Arguments
    ///
    /// * `asset`: [AssetId] - The asset of which to query the decimals, this should be the default `SubId`.
    ///
    /// # Returns
    ///
    /// * [Option<u8>] - The decimal precision used by `asset`.
    ///
    /// # Examples
    ///
    /// ```sway
    /// use src20::SRC20;
    /// use std::constants::DEFAULT_SUB_ID;
    ///
    /// fn foo(contract_id: ContractId) {
    ///     let src_20_abi = abi(SRC20, contract_id);
    ///     let decimals = src_20_abi.decimals(DEFAULT_SUB_ID);
    ///     assert(decimals.unwrap() == 9u8);
    /// }
    /// ```
    #[storage(read)]
    fn decimals(asset: AssetId) -> Option<u8> {
        if asset == AssetId::default() {
            Some(DECIMALS)
        } else {
            None
        }
    }
}

impl SRC3 for Contract {
    /// Mints new assets using the `sub_id` sub-identifier.
    ///
    /// # Arguments
    ///
    /// * `recipient`: [Identity] - The user to which the newly minted assets are transferred to.
    /// * `sub_id`: [SubId] - The sub-identifier of the newly minted asset.
    /// * `amount`: [u64] - The quantity of coins to mint.
    ///
    /// # Reverts
    ///
    /// * When more than 100,000,000 coins have been minted.
    ///
    /// # Number of Storage Accesses
    ///
    /// * Reads: `3`
    /// * Writes: `2`
    ///
    /// # Examples
    ///
    /// ```sway
    /// use src3::SRC3;
    ///
    /// fn foo(contract: ContractId) {
    ///     let contract_abi = abi(SR3, contract);
    ///     contract_abi.mint(Identity::ContractId(this_contract()), ZERO_B256, 100);
    /// }
    /// ```
    #[storage(read, write)]
    fn mint(recipient: Identity, sub_id: SubId, amount: u64) {
        let asset = AssetId::new(contract_id(), sub_id);
        require(
            storage
                .total_supply
                .get(asset)
                .try_read()
                .unwrap_or(0) + amount < 100_000_000,
            MintError::MaxMinted,
        );
        let _ = _mint(
            storage
                .total_assets,
            storage
                .total_supply,
            recipient,
            sub_id,
            amount,
        );
    }
    /// Burns assets sent with the given `sub_id`.
    ///
    /// # Additional Information
    ///
    /// NOTE: The sha-256 hash of `(ContractId, SubId)` must match the `AssetId` where `ContractId` is the id of
    /// the implementing contract and `SubId` is the given `sub_id` argument.
    ///
    /// # Arguments
    ///
    /// * `sub_id`: [SubId] - The sub-identifier of the asset to burn.
    /// * `amount`: [u64] - The quantity of coins to burn.
    ///
    /// # Number of Storage Accesses
    ///
    /// * Reads: `1`
    /// * Writes: `1`
    ///
    /// # Examples
    ///
    /// ```sway
    /// use src3::SRC3;
    ///
    /// fn foo(contract: ContractId, asset_id: AssetId) {
    ///     let contract_abi = abi(SR3, contract);
    ///     contract_abi {
    ///         gas: 10000,
    ///         coins: 100,
    ///         asset_id: AssetId,
    ///     }.burn(ZERO_B256, 100);
    /// }
    /// ```
    #[storage(read, write)]
    fn burn(sub_id: SubId, amount: u64) {
        _burn(storage.total_supply, sub_id, amount);
    }
}