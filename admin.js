// ============================================================
// admin.js - Explore World Admin Panel
// ============================================================

// ADMIN CREDENTIALS
const ADMIN_EMAIL = 'padhiyarrehnuma@gmail.com';
const ADMIN_PASSWORD = 'admin123';

// Current admin tab
let currentAdminTab = 'all';
let adminData = [];

// ============================================================
// LOGIN
// ============================================================
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        sessionStorage.setItem('exploreworld_admin_logged_in', 'true');
        showDashboard();
    } else {
        alert('❌ Invalid admin credentials!');
        document.getElementById('adminPassword').value = '';
    }
});

// Password toggle
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const input = document.getElementById(targetId);
        if (input) {
            if (input.type === 'password') { input.type = 'text'; this.textContent = '🙈'; }
            else { input.type = 'password'; this.textContent = '👁️'; }
        }
    });
});

// Auto login if session active
window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('exploreworld_admin_logged_in') === 'true') {
        showDashboard();
    }
});

function showDashboard() {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    setupAdminTabs();
    refreshAdminData();
}

function adminLogout() {
    if (confirm('Logout from admin panel?')) {
        sessionStorage.removeItem('exploreworld_admin_logged_in');
        location.reload();
    }
}

// ============================================================
// LOAD ADMIN DATA
// ============================================================
function loadAdminData() {
    // Tour bookings
    const tourBookings = JSON.parse(localStorage.getItem('exploreworld_bookings') || '[]').map(b => ({
        id: b.id,
        type: 'Tour',
        name: b.tourName,
        user: b.travelers ? `${b.travelers} traveler(s)` : '-',
        amount: b.total || 0,
        payment: b.payment || 'N/A',
        date: b.date || '-',
        status: b.status || 'pending'
    }));

    // Flight bookings
    const flightBookings = JSON.parse(localStorage.getItem('exploreworld_flight_bookings') || '[]').map(f => ({
        id: f.id,
        type: 'Flight',
        name: `${f.airline || 'Flight'} · ${f.from} → ${f.to}`,
        user: f.passengers ? `${f.passengers} passenger(s)` : '-',
        amount: f.total || 0,
        payment: 'Online',
        date: f.date || '-',
        status: f.status || 'pending'
    }));

    // Hotel bookings
    const hotelBookings = JSON.parse(localStorage.getItem('exploreworld_hotel_bookings') || '[]').map(h => ({
        id: h.id,
        type: 'Hotel',
        name: h.hotelName || 'Hotel',
        user: h.guests ? `${h.guests} guest(s)` : '-',
        amount: h.total || 0,
        payment: 'Online',
        date: h.checkIn || '-',
        status: h.status || 'pending'
    }));

    return { tourBookings, flightBookings, hotelBookings, all: [...tourBookings, ...flightBookings, ...hotelBookings] };
}

// ============================================================
// REFRESH DATA
// ============================================================
function refreshAdminData() {
    const data = loadAdminData();

    // Update stats
    const allBookings = data.all;
    const totalBookings = allBookings.length;
    const totalRevenue = allBookings.reduce((sum, b) => sum + (b.amount || 0), 0);
    const pendingPayments = allBookings.filter(b => b.status === 'pending').reduce((sum, b) => sum + (b.amount || 0), 0);
    const completedPayments = allBookings.filter(b => b.status === 'completed' || b.status === 'delivered').reduce((sum, b) => sum + (b.amount || 0), 0);

    document.getElementById('adminTotalBookings').textContent = totalBookings;
    document.getElementById('adminTotalRevenue').textContent = '₹' + totalRevenue.toLocaleString('en-IN');
    document.getElementById('adminPendingPayments').textContent = '₹' + pendingPayments.toLocaleString('en-IN');
    document.getElementById('adminCompletedPayments').textContent = '₹' + completedPayments.toLocaleString('en-IN');

    // Small stats
    document.getElementById('adminTotalUsers').textContent = totalBookings > 0 ? totalBookings : 0;
    document.getElementById('adminTotalFlights').textContent = data.flightBookings.length;
    document.getElementById('adminTotalHotels').textContent = data.hotelBookings.length;
    document.getElementById('adminTotalTours').textContent = data.tourBookings.length;

    // Store globally
    adminData = data;
    renderAdminTable();
}

// ============================================================
// TABS
// ============================================================
function setupAdminTabs() {
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentAdminTab = this.dataset.tab;
            renderAdminTable();
        });
    });
}

// ============================================================
// RENDER TABLE
// ============================================================
function renderAdminTable() {
    const head = document.getElementById('adminTableHead');
    const body = document.getElementById('adminTableBody');
    const emptyState = document.getElementById('adminEmptyState');
    if (!head || !body) return;

    let rows = [];
    if (currentAdminTab === 'all') rows = adminData.all || [];
    else if (currentAdminTab === 'tours') rows = adminData.tourBookings || [];
    else if (currentAdminTab === 'flights') rows = adminData.flightBookings || [];
    else if (currentAdminTab === 'hotels') rows = adminData.hotelBookings || [];
    else if (currentAdminTab === 'payments') rows = adminData.all || [];

    // Search filter
    const query = (document.getElementById('adminSearchInput')?.value || '').trim().toLowerCase();
    if (query) {
        rows = rows.filter(r =>
            (r.id || '').toLowerCase().includes(query) ||
            (r.name || '').toLowerCase().includes(query) ||
            (r.user || '').toLowerCase().includes(query)
        );
    }

    // Table head
    head.innerHTML = `
        <th>Booking ID</th>
        <th>Type</th>
        <th>Name</th>
        <th>Details</th>
        <th>Amount</th>
        <th>Payment</th>
        <th>Date</th>
        <th>Status</th>
    `;

    // Body
    if (rows.length === 0) {
        body.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    emptyState.style.display = 'none';

    body.innerHTML = rows.map(r => {
        let statusClass = 'pending';
        let statusText = '⏳ Pending';
        if (r.status === 'paid' || r.status === 'delivered' || r.status === 'completed') {
            statusClass = 'paid';
            statusText = '✅ Paid';
        } else if (r.status === 'completed') {
            statusClass = 'completed';
            statusText = '✅ Completed';
        }

        return `
            <tr>
                <td><strong>${r.id}</strong></td>
                <td>${r.type}</td>
                <td>${r.name}</td>
                <td>${r.user || '-'}</td>
                <td>₹${(r.amount || 0).toLocaleString('en-IN')}</td>
                <td>${r.payment || 'N/A'}</td>
                <td>${r.date || '-'}</td>
                <td><span class="admin-status ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    }).join('');
}

// ============================================================
// SEARCH FILTER
// ============================================================
function filterAdminData() {
    renderAdminTable();
}

// ============================================================
// EXPORT CSV
// ============================================================
function exportCSV() {
    const rows = adminData.all || [];
    if (rows.length === 0) {
        alert('No data to export!');
        return;
    }

    const headers = ['Booking ID', 'Type', 'Name', 'Details', 'Amount', 'Payment', 'Date', 'Status'];
    const csvRows = [headers.join(',')];

    rows.forEach(r => {
        const row = [
            r.id,
            r.type,
            `"${(r.name || '').replace(/"/g, '""')}"`,
            `"${(r.user || '').replace(/"/g, '""')}"`,
            r.amount || 0,
            r.payment || '',
            r.date || '',
            r.status || ''
        ];
        csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ExploreWorld_Admin_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}