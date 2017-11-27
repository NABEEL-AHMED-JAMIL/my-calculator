package com.ballistic.added.model;

/**
 * Created by Nabeel on 11/22/2017.
 */
public enum STATUS {

  NEW("New"),
  PENDING_ON_OPS("Pending OPS Step"),
  PENDING_INTERNAL_VALIDATION("Pending Internal Validation"),
  PENDING_EXTERNAL_VALIDATION("Pending External Validation"),
  BUSINESS_VALIDATION_DONE("Business Validation Done"),
  LIVE_IN_PRODUCTION("Live in Production"),;

  private String status_Name;

  STATUS(String aNew) {
    this.status_Name = aNew;
  }

  public String getStatus_Name() {
    return status_Name;
  }

  @Override
  public String toString() {
    return "STATUS{" + "status_Name='" + status_Name + '\'' + '}';
  }
}
