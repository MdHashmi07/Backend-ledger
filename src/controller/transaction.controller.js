
/**
 * - Create a new transaction
 * The 10-STEP TRANSFER flow :
     * 1. Validate Request
     * 2. Validate idempotency key
     * 3. Check account status
     * 4. Derive sender balance from ledger   
     * 5.Create Transaction(Pending) 
     * 6. Create Debit Ledger entry
     * 7. Create CREDIT ledger entry
     * 8. Mark Transaction COMPLETED
     * 9. Commit MongoDB session
     *10. Send email notification
 */