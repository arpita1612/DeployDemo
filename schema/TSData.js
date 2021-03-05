
cube(`TSData`, {
  sql: `SELECT * FROM dbo."TSData"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [activityname, bugid, projectname, clientname, transactiondate]
    },
    MonthWeekNoSum: {
      type: `sum`,
      sql : 'MonthWeekNo'
    },
    ProjectCount: {
      type: `count`,
      sql : 'ProjectID'
    },
    IntEquivalent: {
      type: `sum`,
      sql : `round(IntEquivalent,0)`
    },
    MonthYear: {
      type: `count`,
      sql : 'MonthYear'
    },

    Employee :{
      type: `count`,
      sql : 'EmployeeID'
    }
  },
  
  dimensions: {
    activityname: {
      sql: `${CUBE}."ActivityName"`,
      type: `string`
    },
    EmployeeID :{
      sql: `${CUBE}."EmployeeID"`,
      type: `string`
    },
    bugid: {
      sql: `${CUBE}."BugId"`,
      type: `string`
    },
    
    transactiontime: {
      sql: `${CUBE}."TransactionTime"`,
      type: `string`
    },
    
    intequivalent: {
      sql: `${CUBE}."IntEquivalent"`,
      type: `string`
    },
    
    monthyear: {
      sql: `${CUBE}."MonthYear"`,
      type: `string`
    },
    
    projectname: {
      sql: `${CUBE}."ProjectName"`,
      type: `string`
    },
    
    clientname: {
      sql: `${CUBE}."ClientName"`,
      type: `string`
    },
    
    submittedby: {
      sql: `${CUBE}."SubmittedBy"`,
      type: `string`
    },
    
    employeeemail: {
      sql: `${CUBE}."EmployeeEmail"`,
      type: `string`
    },
    
    projectmanager: {
      sql: `${CUBE}."ProjectManager"`,
      type: `string`
    },
    
    pmemail: {
      sql: `${CUBE}."PMEmail"`,
      type: `string`
    },
    
    timesheetapprovedby: {
      sql: `${CUBE}."TimesheetApprovedBy"`,
      type: `string`
    },
    
    jobnumber: {
      sql: `${CUBE}."JobNumber"`,
      type: `string`
    },
    
    transactiondate: {
      sql: `${CUBE}."TransactionDate"`,
      type: `time`
    },
    
    projectstart: {
      sql: `${CUBE}."ProjectStart"`,
      type: `time`
    },
    
    projectend: {
      sql: `${CUBE}."ProjectEnd"`,
      type: `time`
    },

 
  },
  
  dataSource: `default`
});
