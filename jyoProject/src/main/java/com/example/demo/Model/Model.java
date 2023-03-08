package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Transport_Details")

public class Model {
	
	@Id
	private int sno;
	private String vehicleNo;
	private String date;
	private String driverName;
	private String source;
	private String destination;
	private float price;
	
	
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getVehicleNo() {
		return vehicleNo;
	}
	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getDriverName() {
		return driverName;
	}
	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	
	public Model(int sno, String vehicleNo, String date, String driverName, String source, String destination,
			float price) {
		super();
		this.sno = sno;
		this.vehicleNo = vehicleNo;
		this.date = date;
		this.driverName = driverName;
		this.source = source;
		this.destination = destination;
		this.price = price;
	}
	public Model() {
		
	}
	public String toString() {
		return "S.No="+sno+"VehicleNo="+vehicleNo+"Date="+date+"DriverName="+driverName+"Source="+source+"Destination="+destination+"Price="+price;
	}	
}