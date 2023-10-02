export function getOrderStatus(status) {
	const statusStyles = {
		'PLACED': 'text-sky-600 bg-sky-100',
		'CONFIRMED': 'text-orange-600 bg-orange-100',
		'SHIPPED': 'text-teal-600 bg-teal-100',
		'OUT_FOR_DELIVERY': 'text-yellow-600 bg-yellow-100',
		'DELIVERED': 'text-green-600 bg-green-100',
		'default': 'text-gray-600 bg-gray-100'
	};

	const style = statusStyles[status] || statusStyles['default'];

	return (
		<span className={`capitalize py-1 px-2 rounded-md text-xs ${style}`}>
			{status.replaceAll('_', ' ').toLowerCase()}
		</span>
	);
}
