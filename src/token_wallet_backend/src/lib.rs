use ic_cdk::storage;
use ic_cdk::export::Principal;
use ic_cdk_macros::{query, update, init};
use std::collections::HashMap;

#[derive(Default)]
struct TokenWallet {
    balances: HashMap<Principal, u64>,
}

#[init]
fn init() {
    let state: &mut TokenWallet = storage::get_mut();
    *state = TokenWallet::default();
}

#[update(name = "transfer")]
fn transfer(to: Principal, amount: u64) {
    let caller = ic_cdk::caller();
    let state: &mut TokenWallet = storage::get_mut();

    // Ensure the caller has sufficient balance
    let from_balance = state.balances.entry(caller.clone()).or_insert(0);
    if *from_balance < amount {
        panic!("Insufficient balance");
    }

    // Perform the transfer
    *from_balance -= amount;
    let to_balance = state.balances.entry(to).or_insert(0);
    *to_balance += amount;
}

#[query(name = "get_balance")]
fn get_balance(principal: Principal) -> u64 {
    let state: &TokenWallet = storage::get();
    *state.balances.get(&principal).unwrap_or(&0)
}
