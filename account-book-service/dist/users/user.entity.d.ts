import { Transaction } from '../transactions/transaction.entity';
import { Category } from '../categories/category.entity';
export declare class User {
    userId: string;
    username: string;
    password: string;
    salt: string;
    createTime: Date;
    updateTime: Date;
    transactions: Transaction[];
    categories: Category[];
}
