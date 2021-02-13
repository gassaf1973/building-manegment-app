export default {
  projectColumns: {
    listName: 'projects',
    label: 'Projects',
    columns: [
      {
        id: 'project_name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
      {
        id: 'start_date',
        numeric: true,
        disablePadding: false,
        label: 'Start Date',
        type: 'date',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'end_date',
        numeric: true,
        disablePadding: false,
        label: 'End Date',
        type: 'date',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'cost',
        numeric: true,
        disablePadding: false,
        label: 'Cost',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'region_name',
        numeric: true,
        disablePadding: false,
        label: 'Region',
        type: 'date',
        sortable: true,
        visibility: true,
      },
      {
        id: 'project_type',
        numeric: true,
        disablePadding: false,
        label: 'Type',
        type: 'date',
        sortable: true,
        visibility: true,
      },
      {
        id: 'project_status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
        type: 'date',
        sortable: true,
        visibility: true,
      },
    ],
  },
  productsColumns: {
    listName: 'products',
    label: 'Products',
    columns: [
      {
        id: 'product_name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
      {
        id: 'unit_price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'tva1',
        numeric: true,
        disablePadding: false,
        label: 'TVA 1',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'tva2',
        numeric: true,
        disablePadding: false,
        label: 'TVA 2',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'family_name',
        numeric: true,
        disablePadding: false,
        label: 'Family',
        type: 'text',
        sortable: true,
        visibility: true,
      },
    ],
  },
  customerColumns: {
    listName: 'customers',
    label: 'Customers',
    columns: [
      {
        id: 'customer_name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
      {
        id: 'address1',
        numeric: true,
        disablePadding: false,
        label: 'Address 1',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'address2',
        numeric: true,
        disablePadding: false,
        label: 'Address 2',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'mobile',
        numeric: true,
        disablePadding: false,
        label: 'Mobile',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'phone',
        numeric: true,
        disablePadding: false,
        label: 'Phone',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'email',
        numeric: true,
        disablePadding: false,
        label: 'Email',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
    ],
  },
  supliersColumns: {
    listName: 'supliers',
    label: 'Supliers',
    columns: [
      {
        id: 'tier_name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
      {
        id: 'address1',
        numeric: true,
        disablePadding: false,
        label: 'Address 1',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'address2',
        numeric: true,
        disablePadding: false,
        label: 'Address 2',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'mobile',
        numeric: true,
        disablePadding: false,
        label: 'Mobile',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'phone',
        numeric: true,
        disablePadding: false,
        label: 'Phone',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'email',
        numeric: true,
        disablePadding: false,
        label: 'Email',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
    ],
  },
  orderColumns: {
    listName: 'orders',
    label: 'Orders',
    columns: [
      {
        id: 'order_name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
        type: 'text',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
      {
        id: 'project_name',
        numeric: true,
        disablePadding: false,
        label: 'Project',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'tier_name',
        numeric: true,
        disablePadding: false,
        label: 'Tier',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'produtct_name',
        numeric: true,
        disablePadding: false,
        label: 'Product',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'date',
        numeric: true,
        disablePadding: false,
        label: 'Date',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'quantity',
        numeric: true,
        disablePadding: false,
        label: 'Quantity',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'unit_parice',
        numeric: true,
        disablePadding: false,
        label: 'Unit Price',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },

    ],
  },
  transactionColumns: {
    listName: 'transactions',
    label: 'Transactions',
    columns: [
      {
        id: 'transaction_name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
      {
        id: 'date',
        numeric: true,
        disablePadding: false,
        label: 'Date',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'amountin',
        numeric: true,
        disablePadding: false,
        label: 'IN',
        type: 'text',
        sortable: true,
        translateValue: false,
        visibility: true,
      },
      {
        id: 'amountout',
        numeric: true,
        disablePadding: false,
        label: 'Out',
        type: 'text',
        sortable: true,
        visibility: true,
      },
      {
        id: 'piece_num',
        numeric: true,
        disablePadding: false,
        label: 'Piece',
        type: 'text',
        sortable: true,
        visibility: true,
      },
      {
        id: 'order_name',
        numeric: true,
        disablePadding: false,
        label: 'Order',
        type: 'text',
        sortable: true,
        visibility: true,
      },
    ],
  },
  referencesColumns: {
    listName: 'references',
    addLabel: true,
    label: 'Value List of ',
    columns: [
      {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'ID',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
      {
        id: 'label',
        numeric: false,
        disablePadding: true,
        label: 'Label',
        sortable: true,
        showTooltip: true,
        visibility: true,
        width: 30,
      },
    ],
  },
};