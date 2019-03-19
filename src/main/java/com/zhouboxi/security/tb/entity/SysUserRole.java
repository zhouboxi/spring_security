package com.zhouboxi.security.tb.entity;

import javax.persistence.*;

@Entity
@Table(name="mesext_user_role")
public class SysUserRole {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int user_id;
	private int role_id;

	public SysUserRole() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getRole_id() {
		return role_id;
	}

	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
}

