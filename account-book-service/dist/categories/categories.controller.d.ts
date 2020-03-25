import { CreateOrAmendCategoryDto } from './dto/create-or-amend-category.dto';
import { CategoriesService } from './categories.service';
import { QueryDto } from './dto/query.dto';
import { User as UserEntity } from '../users/user.entity';
import { CategoryListInterface } from './interfaces/category-list.interface';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    query(queryDto: QueryDto, user: UserEntity): Promise<CategoryListInterface>;
    create(createOrAmendCategoryDto: CreateOrAmendCategoryDto, user: UserEntity): Promise<{}>;
    remove(categoryCode: string): Promise<{}>;
    amend(categoryCode: any, createOrAmendCategoryDto: CreateOrAmendCategoryDto, user: UserEntity): Promise<{}>;
}
