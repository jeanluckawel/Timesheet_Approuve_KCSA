import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, InfiniteScroll, usePage } from '@inertiajs/react';
import { IconFolderCode } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

type EmployeeType = {
    EmployeeID: number;
    Place_Work: string;
    Rotation: string;
    FirstName: string;
    SecondName: string;
    LastName: string;
    Gender: string;
    DateNaissance: string;
    JobTitle: string;
    JobGrade: string;
    Category: string;
    Department: string;
    WorkLocation: string;
    Nationality: string;
    LineManager: string;
    SiteID: string;
    Team: string;
    GANG: string;
    CC_NAME: string;
    Telephone: string;
    Actif: string;
};

type EmployeeProps = {
    data: EmployeeType[];
    [key: string]: string | number | Array<unknown> | undefined;
};

export default function Dashboard({ employees }: { employees: EmployeeProps }) {
    const { auth } = usePage<SharedData>().props;

    const getFullName = (employee: EmployeeType) => {
        return `${employee.FirstName} ${employee?.SecondName} ${employee?.LastName}`;
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <h1>
                        Welcome back <strong>{auth.user.name}</strong>
                    </h1>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl md:min-h-min">
                    {
                        employees.data.length === 0 ? <EmptyList /> : (
                            <InfiniteScroll data="employees">
                                <Table>
                                    <TableCaption>A list of employees.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">
                                                NO.
                                            </TableHead>
                                            <TableHead>Full Name</TableHead>
                                            {/*    Add column based on the employee type*/}
                                            <TableHead>Gender</TableHead>
                                            <TableHead>Job Title</TableHead>
                                            <TableHead>Department</TableHead>
                                            <TableHead>Line Manager</TableHead>

                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {employees.data.map((employee, index) => (
                                            <TableRow key={`${employee.EmployeeID}.${index}`}>
                                                <TableCell>{index+1}.</TableCell>
                                                <TableCell>{getFullName(employee)}</TableCell>
                                                <TableCell>{employee.Gender}</TableCell>
                                                <TableCell>{employee.JobTitle}</TableCell>
                                                <TableCell>{employee.Department}</TableCell>
                                                <TableCell>{employee.LineManager}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </InfiniteScroll>
                        )
                    }
                </div>
            </div>
        </AppLayout>
    );
}

export function EmptyList() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <IconFolderCode />
                </EmptyMedia>
                <EmptyTitle>No Employee Yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t created any employee yet. Get started by creating
                    your first employee.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="flex gap-2">
                    <Button>Create Employee</Button>
                    <Button variant="outline">Import Employees</Button>
                </div>
            </EmptyContent>
        </Empty>
    )
}

