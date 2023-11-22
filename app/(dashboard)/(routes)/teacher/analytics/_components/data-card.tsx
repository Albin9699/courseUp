import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { formatprice } from "@/lib/format";

interface DatacardProps{
    value: number;
    label: string;
    shouldFormat?:boolean;
}

export const DataCard = ({
    value,
    label,
    shouldFormat
}:DatacardProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {shouldFormat ? formatprice(value) : value}
                </div>
            </CardContent>
        </Card>
    )
}