import Link from 'next/link'
import { AuthProvider } from '../../contexts/AuthContext';
const Dashboard = () => {

    return (
        <Link href="/dashboard">
            <AuthProvider>
                <div>
                    <h1>Dashboard</h1>
                </div>
            </AuthProvider>
        </Link>
    )
}

export default Dashboard;