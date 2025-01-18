import {DataTable} from '@/components/Data-table';
import {foods} from '@/lib/data';
import {columns} from '@/components/Foods/columns';


export default function  Food (){
	return (
		<>
			<div>
				<h1>Food</h1>
				<DataTable columns={columns} data={foods} />
			</div>
		
		</>
	)
}