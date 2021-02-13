import BusinessIcon from '@material-ui/icons/Business';
import OrdersIcon from '@material-ui/icons/LocalGroceryStore';
import PeopleIcon from '@material-ui/icons/People';
import AddShopingCartIcon from '@material-ui/icons/AddShoppingCart';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CurrencyIcon from '@material-ui/icons/EuroSymbol';
import ListIcon from '@material-ui/icons/List';
import StatusIcon from '@material-ui/icons/Flag';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ProjectTypeIcon from '@material-ui/icons/Ballot';
import RegionIcon from '@material-ui/icons/Place';
import FamilyIcon from '@material-ui/icons/Category';
import FamilyTierIcon from '@material-ui/icons/Style';


const config = {
    width: 700,
    listItems: [
        {
            id: 'projects',
            propsFileName: 'projects',
            label: 'Projects',
            icon: BusinessIcon,
            columnListName: 'projectColumns'
        },
        {
            id: 'products',
            propsFileName: 'products',
            label: 'Products',
            icon: AddShopingCartIcon,
            columnListName: 'productsColumns'
        },
        {
            id: 'customers',
            propsFileName: 'customers',
            label: 'Customers',
            icon: PeopleIcon,
            columnListName: 'customerColumns'
        },
        {
            id: 'supliers',
            propsFileName: 'supliers',
            label: 'Supliers',
            icon: SupervisedUserCircleIcon,
            columnListName: 'supliersColumns'
        },
        {
            id: 'orders',
            propsFileName: 'orders',
            label: 'Orders',
            icon: OrdersIcon,
            columnListName: 'orderColumns'
        },
        {
            id: 'transactions',
            propsFileName: 'transactions',
            label: 'Transactions',
            icon: AccountBalanceIcon,
            columnListName: 'transactionColumns'
        },
        {
            id: 'lists',
            propsFileName: 'projects',
            label: 'Lists',
            icon: ListIcon,
            hasSubList: true,
            subLists: [
                {
                    id: 'currency',
                    propsFileName: 'references',
                    label: 'Currency',
                    icon: CurrencyIcon,
                    columnListName: 'referencesColumns'
                },
                {
                    id: 'family',
                    propsFileName: 'references',
                    label: 'Family',
                    icon: FamilyIcon,
                    columnListName: 'referencesColumns'
                },
                {
                    id: 'familyTier',
                    propsFileName: 'references',
                    label: 'Family Tier',
                    icon: FamilyTierIcon,
                    columnListName: 'referencesColumns'
                },
                {
                    id: 'paymentMode',
                    propsFileName: 'references',
                    label: 'Payment Mode',
                    icon: CreditCardIcon,
                    columnListName: 'referencesColumns'
                },
                {
                    id: 'projectStatus',
                    propsFileName: 'references',
                    label: 'Project Status',
                    icon: StatusIcon,
                    columnListName: 'referencesColumns'
                },                {
                    id: 'projectType',
                    propsFileName: 'references',
                    label: 'Project Type',
                    icon: ProjectTypeIcon,
                    columnListName: 'referencesColumns'
                },
                {
                    id: 'region',
                    propsFileName: 'references',
                    label: 'Region',
                    icon: RegionIcon,
                    columnListName: 'referencesColumns'
                },

            ],
        },
    ],
};

export default config;
