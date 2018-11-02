/**
 * Created by 98194 on 2018/10/31.
 */

//发送请求

import ajax from './ajax';

//请求登录的函数
export const reqLogin = data => ajax('/login', data, 'POST');
//请求注册的函数
export const reqRegister = data => ajax('/register', data, 'POST');
//请求更新用户数据的函数
export const reqUpdateUserInfo = data => ajax('/update', data, 'POST');