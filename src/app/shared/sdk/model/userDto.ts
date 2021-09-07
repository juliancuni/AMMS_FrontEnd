/**
 * AutMotive Api
 * Car Repair Shop Managment, Parts Inventory, Clients Managment etc
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RoleDto } from './roleDto';


export interface UserDto { 
    id?: string;
    username: string;
    password: string;
    email: string;
    docId?: string;
    emer?: string;
    mbiemer?: string;
    alias?: string;
    photo?: string;
    phone?: string;
    address?: string;
    roles?: Array<RoleDto>;
    isActive: boolean;
}
