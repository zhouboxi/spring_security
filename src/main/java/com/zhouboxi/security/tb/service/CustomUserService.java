package com.zhouboxi.security.tb.service;


import com.zhouboxi.security.tb.dao.SysUserRepository;
import com.zhouboxi.security.tb.entity.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    SysUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       SysUser user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("用户名不存在");
        }
        System.out.println("s:" + username);
        System.out.println("username:" + user.getUsername() + ";password:" + user.getPassword());
        System.out.println("size:" + user.getRoles().size());
        /*System.out.println("role:" + user.getRoles());*/
        return user;
        //这里可以通过数据库来查找到实际的用户信息，这里我们先模拟下,后续我们用数据库来实现
        /*if(username.equals("admin"))
        {
            List<SysRole> sysRoles = new ArrayList<>();
            SysRole sysRole = new SysRole();
            sysRole.setName("ROLE_ADMIN");
            sysRoles.add(sysRole);
            //假设返回的用户信息如下;
            SysUser userInfo=new SysUser("admin", "123456", new Date(), sysRoles);
            return userInfo;
        }
        return null;*/
    }
}
