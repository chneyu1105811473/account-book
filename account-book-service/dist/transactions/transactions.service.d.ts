import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { CreateOrAmendTransactionDto } from './dto/create-or-amend-transaction.dto';
import { User } from '../users/user.entity';
import { Category } from '../categories/category.entity';
import { TransactionList } from './interfaces/transaction-list.interface';
import { TransactionDetail } from './interfaces/transaction-detail.interface';
export declare class TransactionsService {
    private readonly transactionRepository;
    private readonly userRepository;
    private readonly categoryRepository;
    constructor(transactionRepository: Repository<Transaction>, userRepository: Repository<User>, categoryRepository: Repository<Category>);
    findList(size: number, page: number, userId: string): Promise<TransactionList>;
    findOne(transactionCode: number): Promise<TransactionDetail>;
    createOrAmend(data: CreateOrAmendTransactionDto, userId: string, transactionCode?: number): Promise<{}>;
    remove(transactionCode: number): Promise<{}>;
    private findUser;
    private findCategory;
}
