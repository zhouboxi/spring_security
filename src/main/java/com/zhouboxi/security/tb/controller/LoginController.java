package com.zhouboxi.security.tb.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
    @RequestMapping("/")
    public String index(Model model) {
        /*Msg msg = new Msg("测试标题", "测试内容", "额外信息，只对管理员显示");
        model.addAttribute("msg", msg);*/
        return "index";
    }
    @RequestMapping("/index")
    public String indexPage(Model model) {
        /*Msg msg = new Msg("测试标题", "测试内容", "额外信息，只对管理员显示");
        model.addAttribute("msg", msg);*/
        System.out.println("1");
        System.out.println("2");
        System.out.println("3");
        System.out.println("4");
        return "index";
    }

    @PreAuthorize("hasAuthority('ROLE_USER')")
    @RequestMapping(value="/admin/test1")
    @ResponseBody
    public String adminTest1() {
        return "ROLE_USER";
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @RequestMapping("/admin/test2")
    @ResponseBody
    public String adminTest2() {
        return "ROLE_ADMIN";
    }

}
