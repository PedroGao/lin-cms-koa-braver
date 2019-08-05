import { HttpException} from '@pedro/core';
import { Exception } from '@pedro/core';
import assert from 'assert';
import { isInteger } from 'lodash';

/**
 * 成功
 */
export class Success extends HttpException {
  public code = 201;
  public msg = '成功';
  public errorCode = 0;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}
/**
 * 失败
 */
export class Failed extends HttpException {
  public code = 400;
  public msg = '失败';
  public errorCode = 9999;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 认证失败
 */
export class AuthFailed extends HttpException {
  public code = 401;
  public msg = '认证失败';
  public errorCode = 10000;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 资源不存在
 */
export class NotFound extends HttpException {
  public code = 404;
  public msg = '资源不存在';
  public errorCode = 10020;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 参数错误
 */
export class ParametersException extends HttpException {
  public code = 400;
  public msg = '参数错误';
  public errorCode = 10030;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 令牌失效或损坏
 */
export class InvalidTokenException extends HttpException {
  public code = 401;
  public msg = '令牌失效';
  public errorCode = 10040;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 令牌过期
 */
export class ExpiredTokenException extends HttpException {
  public code = 422;
  public msg = '令牌过期';
  public errorCode = 10050;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 服务器未知错误
 */
export class UnknownException extends HttpException {
  public code = 400;
  public msg = '服务器未知错误';
  public errorCode = 999;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 字段重复
 */
export class RepeatException extends HttpException {
  public code = 400;
  public msg = '字段重复';
  public errorCode = 10060;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 不可操作
 */
export class Forbidden extends HttpException {
  public code = 403;
  public msg = '不可操作';
  public errorCode = 10070;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 请求方法不允许
 */
export class MethodNotAllowed extends HttpException {
  public code = 405;
  public msg = '请求方法不允许';
  public errorCode = 10080;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * refresh token 获取失败
 */
export class RefreshException extends HttpException {
  public code = 401;
  public msg = 'refresh token 获取失败';
  public errorCode = 10100;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 文件体积过大
 */
export class FileTooLargeException extends HttpException {
  public code = 413;
  public msg = '文件体积过大';
  public errorCode = 10110;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 文件数量过多
 */
export class FileTooManyException extends HttpException {
  public code = 413;
  public msg = '文件数量过多';
  public errorCode = 10120;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 文件扩展名不符合规范
 */
export class FileExtensionException extends HttpException {
  public code = 406;
  public msg = '文件扩展名不符合规范';
  public errorCode = 10130;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}

/**
 * 请求过于频繁，请稍后重试
 */
export class LimitException extends HttpException {
  public code = 401;
  public msg = '请求过于频繁，请稍后重试';
  public errorCode = 10140;

  constructor(ex ? : Exception) {
    super();
    if (ex && ex.code) {
      assert(isInteger(ex.code));
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      assert(isInteger(ex.errorCode));
      this.errorCode = ex.errorCode;
    }
  }
}