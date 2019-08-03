import Router, { IMiddleware } from 'koa-router';
export interface Meta {
    auth?: string;
    module?: string;
    mount?: boolean;
}
/**
 * lin-router继承自koa-router
 * 即可使用全部的koa-router api
 * 也可使用以 lin 为前缀的方法，用于视图函数的权限
 */
export declare class LinRouter extends Router {
    linOption(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): any;
    linHead(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): any;
    linGet(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): any;
    linPut(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): any;
    linPatch(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): any;
    linPost(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): any;
    linDelete(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): any;
}