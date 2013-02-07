﻿Option Explicit

Repositoriescollection.Add ".\FundspireRepository1.tsr"
Dim FolderName, FundName, TimeStamp, ObjExcel, myFile, mySheet,Rows_Count, i
TimeStamp = GetDateTimeStamp

Set ObjExcel = CreateObject("Excel.Application")
Set myFile = ObjExcel.Workbooks.Open("D:\Fundspire_QTP\Test Data\TestData1.xlsx")
Set mySheet = myFile.Worksheets(Environment.Value("TestName"))
Rows_Count = mySheet.usedrange.rows.Count

For i = 2 to Rows_Count

FolderName = mySheet.Cells(i, "A")
FundName = mySheet.Cells(i, "B")

Call Login()
Call AddFund(FolderName,FundName)
mySheet.Cells(i, "C") = "PASS"
Call Logout()

Next

myFile.Save
MyFile.Close
ObjExcel.Quit
Set MyFile = Nothing
Set ObjExcel = Nothing