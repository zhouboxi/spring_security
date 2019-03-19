package com.zhouboxi.security.tb.entity;

import javax.persistence.*;

@Entity
@Table(name = "mesext_role_permission")
public class SysRolePermission {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int permission_id;
    private int role_id;

    public SysRolePermission() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPermission_id() {
        return permission_id;
    }

    public void setPermission_id(int permission_id) {
        this.permission_id = permission_id;
    }

    public int getRole_id() {
        return role_id;
    }

    public void setRole_id(int role_id) {
        this.role_id = role_id;
    }
}

