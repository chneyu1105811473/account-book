import { CreateOrAmendCategoryDto } from './dto/create-or-amend-category.dto';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { QueryDto } from './dto/query.dto';
import { User } from '../users/user.entity';
import { CategoryListInterface } from './interfaces/category-list.interface';
export declare class CategoriesService {
    private readonly categoriesRepository;
    private readonly userRepository;
    constructor(categoriesRepository: Repository<Category>, userRepository: Repository<User>);
    getList(data: QueryDto, userId: string): Promise<CategoryListInterface>;
    private getFindListParams;
    createOrAmend(data: CreateOrAmendCategoryDto, userId: string, categoryCode?: number): Promise<{}>;
    delete(categoryCode: number): Promise<{}>;
    private findUser;
}
