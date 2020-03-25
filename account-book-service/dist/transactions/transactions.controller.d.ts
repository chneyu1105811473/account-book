import { GetTransactionsDto } from './dto/get-transactions.dto';
import { TransactionsService } from './transactions.service';
import { CreateOrAmendTransactionDto } from './dto/create-or-amend-transaction.dto';
import { User as UserEntity } from '../users/user.entity';
import { TransactionList } from './interfaces/transaction-list.interface';
import { TransactionDetail } from './interfaces/transaction-detail.interface';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getList(query: GetTransactionsDto, user: UserEntity): Promise<TransactionList>;
    getDetail(code: string): Promise<TransactionDetail>;
    create(data: CreateOrAmendTransactionDto, user: UserEntity): Promise<{}>;
    amend(data: CreateOrAmendTransactionDto, user: UserEntity, code: string): Promise<{}>;
    remove(code: string): Promise<{}>;
}
