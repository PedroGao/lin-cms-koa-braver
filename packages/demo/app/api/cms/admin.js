import { LinRouter, Failed } from '@pedro/core';
import {
  AdminUsersValidator,
  ResetPasswordValidator,
  UpdateUserInfoValidator,
  NewGroupValidator,
  UpdateGroupValidator,
  DispatchPermissionValidator,
  DispatchPermissionsValidator,
  RemovePermissionsValidator
} from '../../validators/admin'
import { PositiveIdValidator, PaginateValidator } from '../../validators/common'

import { adminRequired } from '../../middleware/jwt';
import { AdminDao } from '../../dao/admin';

const admin = new LinRouter({
  prefix: '/cms/admin'
});

const adminDao = new AdminDao();

admin.linGet(
  'getAllPermissions',
  '/permission',
  {
    auth: '查询所有可分配的权限',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const permissions = await adminDao.getAllPermissions()
    ctx.json(permissions)
  }
);

admin.linGet(
  'getAdminUsers',
  '/users',
  {
    auth: '查询所有用户',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new AdminUsersValidator().validate(ctx);
    const { users, total } = await adminDao.getUsers(
      v.get('query.group_id'),
      v.get('query.page'),
      v.get('query.count')
    )
    ctx.json({
      items: users,
      total,
      count: v.get('query.count'),
      page: v.get('query.page')
    })
  }
);

admin.linPut(
  'changeUserPassword',
  '/user/:id/password',
  {
    auth: '修改用户密码',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new ResetPasswordValidator().validate(ctx);
    await adminDao.changeUserPassword(ctx, v);
    ctx.success({
      msg: '密码修改成功'
    });
  }
);

admin.linDelete(
  'deleteUser',
  '/:id',
  {
    auth: '删除用户',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new PositiveIdValidator().validate(ctx);
    const id = v.get('path.id');
    await adminDao.deleteUser(ctx, id);
    ctx.success({
      msg: '操作成功'
    });
  }
);

admin.linPut(
  'updateUser',
  '/user/:id',
  {
    auth: '管理员更新用户信息',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new UpdateUserInfoValidator().validate(ctx);
    await adminDao.updateUserInfo(ctx, v);
    ctx.success({
      msg: '操作成功'
    });
  }
);

admin.linGet(
  'getAdminGroups',
  '/group',
  {
    auth: '查询所有权限组及其权限',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new PaginateValidator().validate(ctx);
    const { groups, total } = await adminDao.getGroups(
      ctx,
      v.get('query.page'),
      v.get('query.count')
    );
    if (groups.length < 1) {
      throw new NotFound({
        msg: '未找到任何权限组'
      });
    }
    ctx.json({
      items: groups,
      total: total,
      page: v.get('query.page'),
      count: v.get('query.count'),
    });
  }
);

admin.linGet(
  'getAllGroup',
  '/group/all',
  {
    auth: '查询所有权限组',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const groups = await adminDao.getAllGroups()
    if (!groups || groups.length < 1) {
      throw new NotFound({
        msg: '未找到任何权限组'
      });
    }
    ctx.json(groups);
  }
);

admin.linGet(
  'getGroup',
  '/group/:id',
  {
    auth: '查询一个权限组及其权限',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new PositiveIdValidator().validate(ctx);
    const group = await adminDao.getGroup(ctx, v.get('path.id'));
    ctx.json(group);
  }
);

admin.linPost(
  'createGroup',
  '/group',
  {
    auth: '新建权限组',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new NewGroupValidator().validate(ctx);
    const ok = await adminDao.createGroup(ctx, v);
    if (!ok) {
      throw new Failed({
        msg: '新建分组失败'
      });
    }
    ctx.success({
      msg: '新建分组成功'
    });
  }
);

admin.linPut(
  'updateGroup',
  '/group/:id',
  {
    auth: '更新一个权限组',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new UpdateGroupValidator().validate(ctx);
    await adminDao.updateGroup(ctx, v);
    ctx.success({
      msg: '更新分组成功'
    });
  }
);

admin.linDelete(
  'deleteGroup',
  '/group/:id',
  {
    auth: '删除一个权限组',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new PositiveIdValidator().validate(ctx);
    const id = v.get('path.id');
    await adminDao.deleteGroup(ctx, id);
    ctx.success({
      msg: '删除分组成功'
    });
  }
);

admin.linPost(
  'dispatchPermission',
  '/permission/dispatch',
  {
    auth: '分配单个权限',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new DispatchPermissionValidator().validate(ctx);
    await adminDao.dispatchPermission(ctx, v);
    ctx.success({
      msg: '添加权限成功'
    });
  }
);

admin.linPost(
  'dispatchPermissions',
  '/permission/dispatch/batch',
  {
    auth: '分配多个权限',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new DispatchPermissionsValidator().validate(ctx);
    await adminDao.dispatchPermissions(ctx, v);
    ctx.success({
      msg: '添加权限成功'
    });
  }
);

admin.linPost(
  'removePermissions',
  '/permission/remove',
  {
    auth: '删除多个权限',
    module: '管理员',
    mount: false
  },
  adminRequired,
  async ctx => {
    const v = await new RemovePermissionsValidator().validate(ctx);
    await adminDao.removePermissions(ctx, v);
    ctx.success({
      msg: '删除权限成功'
    });
  }
);

export { admin }