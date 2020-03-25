import { Transaction } from '../transactions/transaction.entity';
import { User } from '../users/user.entity';
export declare class Category {
    categoryCode: number;
    categoryName: string;
    isExpense: boolean;
    createTime: Date;
    updateTime: Date;
    transactions: Transaction[];
    user: User;
}
