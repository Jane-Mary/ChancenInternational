import React, { useState } from "react";
import useTopbar from "../../re-components/Student/useTopbar";
import { PieChart } from "@mui/x-charts/PieChart";
import "../../style/studentstyles/repayment.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const Repayment = () => {
  useTopbar();

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);

  const payments = [
    {
      installment: 1,
      amount: "90,000 XAF",
      status: "Paid",
      dueDate: "Sept 1, 2024",
      paidOn: "Sept 1, 2024",
    },
    {
      installment: 2,
      amount: "90,000 XAF",
      status: "Paid",
      dueDate: "Oct 1, 2024",
      paidOn: "Oct 1, 2024",
    },
    {
      installment: 3,
      amount: "90,000 XAF",
      status: "Overdue",
      dueDate: "Nov 1, 2024",
      paidOn: "...",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "green"; // Color for paid status
      case "Overdue":
        return "red"; // Color for overdue status
      default:
        return "black"; // Default color for other statuses
    }
  };

  // Handlers for modals
  const handleViewDetails = (payment) => {
    setSelectedStudent(payment);
    setDetailModalOpen(true);
  };

  return (
    <div className="main" id="main">
      <Grid container spacing={4} style={{ padding: "20px" }}>
        {/* Page Title */}
        <Grid item xs={12} style={{   background: 'linear-gradient(to right, #1976d2, #64b5f6)',color:'white',height:'20vh',borderRadius:'1rem',padding:'3rem' }}>
  <Typography variant="h3" gutterBottom >
            Repayments
          </Typography>
          <Typography variant="h5">Summary Of Total Dept Of 600,000 XAF</Typography>
        </Grid>

        {/* Students Table */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Installment</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Paid On</TableCell>
                      <TableCell>Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {payments.map((payment, index) => (
                      <TableRow key={index}>
                        <TableCell>{payment.installment}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell style={{ color: getStatusColor(payment.status) }}>
                          {payment.status}
                        </TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>{payment.paidOn}</TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() => handleViewDetails(payment)}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* View Details Modal */}
        <Dialog
          open={isDetailModalOpen}
          onClose={() => setDetailModalOpen(false)}
        >
          <DialogTitle>Repayment Details</DialogTitle>
          <DialogContent>
            {selectedStudent && (
              <>
                <Typography variant="subtitle1">
                  Installment: {selectedStudent.installment}
                </Typography>
                <Typography variant="subtitle1">
                  Amount: {selectedStudent.amount}
                </Typography>
                <Typography variant="subtitle1">
                  Status: {selectedStudent.status}
                </Typography>
                <Typography variant="subtitle1">
                  Due Date: {selectedStudent.dueDate}
                </Typography>
                <Typography variant="subtitle1">
                  Paid On: {selectedStudent.paidOn}
                </Typography>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDetailModalOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <div className="charts">
        <div className="upcoming">
          <h1>Upcoming Installments</h1>
          <p>- Fourth Installment</p>
          <p> - Amount = 90,000 XAF</p>
          <p> - Due Date = Dec 1, 2024</p>
        </div>

        <div className="pie">
          <h1>Amount Paid VS Amount Pending</h1>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 25, label: " Paid", color: "green" },
                  { id: 1, value: 75, label: "Pending", color: "#880808" },
                ],
              },
            ]}
            width={500}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Repayment;
