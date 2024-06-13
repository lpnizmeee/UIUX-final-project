import React from "react";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
} from "@mui/material";

const KPIDetailTable = (props) => {
    return (
        <Table
            aria-label="simple table"
            sx={{
                mt: 3,
                whiteSpace: "nowrap",
            }}
        >
            <TableHead>
                <TableRow>
                    <TableCell style={{ width: '10%' }}>
                        <Typography paddingLeft={"1rem"} color="textSecondary" variant="h6">
                            Id
                        </Typography>
                    </TableCell>
                    <TableCell style={{ width: '50%' }}>
                        <Typography paddingLeft={"1rem"} color="textSecondary" variant="h6">
                            Name
                        </Typography>
                    </TableCell>
                    <TableCell style={{ width: '15%' }}>
                        <Typography paddingLeft={"1rem"} color="textSecondary" variant="h6">
                            Quantity status
                        </Typography>
                    </TableCell>
                    <TableCell style={{ width: '15%' }}>
                        <Typography paddingLeft={"1rem"} color="textSecondary" variant="h6">
                            Unit
                        </Typography>
                    </TableCell>
                    <TableCell align="right" style={{ width: '10%' }}>
                        <Typography color="textSecondary" variant="h6">
                            Priority
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.list.tasks.map((product) => (
                    <TableRow key={product.name}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "300",
                                }}
                            >
                                {product.id}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "300",
                                        }}
                                        paddingLeft={"1rem"}
                                    >
                                        {product.name}
                                    </Typography>
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" paddingLeft={"1rem"} variant="h6">
                                {product.quantity}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography paddingLeft={"1rem"} variant="h6">{product.unit}</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Chip
                                sx={{
                                    pl: "4px",
                                    pr: "4px",
                                    backgroundColor: product.pbg,
                                    color: "#fff",
                                }}
                                size="small"
                                label={product.status}
                            ></Chip>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default KPIDetailTable;
