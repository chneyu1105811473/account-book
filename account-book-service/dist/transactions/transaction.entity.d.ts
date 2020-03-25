import { User } from '../users/user.entity';
import { Category } from '../categories/category.entity';
export declare class Transaction {
    transactionCode: number;
    amount: number;
    remark: string;
    date: string;
    createTime: Date;
    updateTime: Date;
    user: User;
    category: Category;
}
