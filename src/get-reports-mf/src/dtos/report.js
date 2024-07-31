// File: report.js
// Description: This file contains the code for the Report DTO.

// Report DTO class
export default class Report {
    constructor(id, reportName, description, state) {
      this.id = id;
      this.reportName = reportName;
      this.description = description;
      this.state = state;
    }
}