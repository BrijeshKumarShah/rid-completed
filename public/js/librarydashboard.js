(function() {
    // ===== DOM References =====
    const container = document.getElementById('cardsGridContainer');
    const searchInput = document.getElementById('siteSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterIntime = document.getElementById('filterIntimeBtn');
    const filterOuttime = document.getElementById('filterOuttimeBtn');
    const createModal = document.getElementById('createFormModal');
    const detailModal = document.getElementById('detailModal');
    const closeFormBtn = document.getElementById('closeFormModalBtn');
    const closeDetailBtn = document.getElementById('closeModalBtn');
    const detailToggleBtn = document.getElementById('detailTogglePaymentBtn');
    const deleteCardBtn = document.getElementById('deleteCardBtn');
    const modalDetails = document.getElementById('modalDetailsContainer');
    const popupCreateBtn = document.getElementById('popupCreateBtn');

    // Form inputs
    const popupName = document.getElementById('popupCandName');
    const popupDate = document.getElementById('popupCandDate');
    const popupShift = document.getElementById('popupCandShift');
    const popupSiteType = document.getElementById('popupSiteType');
    const popupFee = document.getElementById('popupCandFee');
    const popupMobile = document.getElementById('popupCandMobile');
    const popupSite = document.getElementById('popupCandSite');
    const popupIn = document.getElementById('popupCandIn');
    const popupOut = document.getElementById('popupCandOut');
    const popupPaymentStatus = document.getElementById('popupPaymentStatus');

    // Section form inputs
    const sectionName = document.getElementById('sectionCandName');
    const sectionDate = document.getElementById('sectionCandDate');
    const sectionShift = document.getElementById('sectionCandShift');
    const sectionSiteType = document.getElementById('sectionSiteType');
    const sectionFee = document.getElementById('sectionCandFee');
    const sectionMobile = document.getElementById('sectionCandMobile');
    const sectionSite = document.getElementById('sectionCandSite');
    const sectionPaymentStatus = document.getElementById('sectionPaymentStatus');
    const sectionCreateBtn = document.getElementById('sectionCreateBtn');

    // State
    let currentCards = [];
    let currentDetailId = null;
    const today = new Date().toISOString().split('T')[0];
    
    // Set today's date
    if (popupDate) popupDate.value = today;
    if (sectionDate) sectionDate.value = today;

    // ===== Local Storage Functions =====
    function loadFromStorage() {
        const stored = localStorage.getItem('libraryCandidates');
        if (stored) {
            try {
                currentCards = JSON.parse(stored);
            } catch (e) {
                console.error('Error parsing stored data:', e);
                currentCards = [];
            }
        } else {
            // Add sample data
            currentCards = [
                {
                    _id: '1',
                    name: 'Rahul Sharma',
                    date: today,
                    shift: 'Morning',
                    siteType: 'normal',
                    fee: 500,
                    mobile: '9876543210',
                    siteNumber: 101,
                    inTime: '09:00 AM',
                    outTime: '05:00 PM',
                    payment: 'paid'
                },
                {
                    _id: '2',
                    name: 'Priya Patel',
                    date: today,
                    shift: 'Evening',
                    siteType: 'reservb',
                    fee: 600,
                    mobile: '9876543211',
                    siteNumber: 102,
                    inTime: '02:00 PM',
                    outTime: '10:00 PM',
                    payment: 'unpaid'
                },
                {
                    _id: '3',
                    name: 'Amit Kumar',
                    date: today,
                    shift: 'Morning',
                    siteType: 'normal',
                    fee: 500,
                    mobile: '9876543212',
                    siteNumber: 103,
                    inTime: '',
                    outTime: '05:00 PM',
                    payment: 'paid'
                }
            ];
            saveToStorage();
        }
    }

    function saveToStorage() {
        localStorage.setItem('libraryCandidates', JSON.stringify(currentCards));
    }

    // ===== Helper Functions =====
    function escapeHTML(s) { 
        if(!s) return ''; 
        return String(s).replace(/[&<>"']/g, c => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        })[c]); 
    }

    function convertTimeToNumber(timeStr) {
        if (!timeStr) return -1;
        
        const [time, period] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        
        return hours + minutes / 60;
    }

    function getStatus(intime, outtime) {
        if (!intime || intime.trim() === '') {
            return 'red';
        }
        
        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
        const currentTime = currentHours + currentMinutes / 60;
        
        const inTimeNum = convertTimeToNumber(intime);
        const outTimeNum = convertTimeToNumber(outtime);
        
        if (currentTime >= inTimeNum && currentTime <= outTimeNum) {
            return 'green';
        } else {
            return 'red';
        }
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN');
    }

    // ===== Section Management =====
    window.closeSection = function(sectionId) {
        document.getElementById(sectionId).classList.remove('active');
        document.getElementById('dashboardSection').classList.add('active');
    };

    function openSection(sectionName) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const sectionId = sectionName + 'Section';
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
            
            if (sectionName === 'studentList') {
                updateStudentListTable();
            } else if (sectionName === 'seatView') {
                updateSeatView();
            }
        }
        
        if (window.innerWidth <= 992) {
            document.getElementById('customSidebar').classList.remove('active');
        }
    }

    // ===== Local Storage Operations =====
    async function fetchAllCandidatesFromDB() {
    try {
        const res = await fetch("/api/candidates/all");
        const data = await res.json();

        if (data.success) {
            currentCards = data.data;
            renderAllCards();
            updateStudentListTable();
            updateSeatView();
        }

    } catch (error) {
        console.error("Fetch error:", error);
    }
}
     async function createCandidate(candidateData) {
    try {
        const res = await fetch("/api/candidates/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candidateData)
        });

        const data = await res.json();

        if (!data.success) {
            alert(data.message);
            return;
        }

        alert("Seat Created Successfully");

        fetchAllCandidatesFromDB();

        createModal.classList.remove('active');

    } catch (error) {
        console.error("Create error:", error);
        alert("Server error. Please try again.");
    }
}

    function updatePayment(id, paymentStatus) {
        const index = currentCards.findIndex(c => c._id === id);
        if (index !== -1) {
            currentCards[index].payment = paymentStatus;
            saveToStorage();
            
            // Update UI
            renderAllCards();
            updateStudentListTable();
            updateSeatView();
            
            // Update detail modal if open
            if (currentDetailId === id) {
                const updatedCard = currentCards.find(c => c._id === id);
                if (updatedCard) showPopupDetails(updatedCard);
            }
            alert('Payment updated successfully');
        }
    }

    function deleteCandidate(id) {
        const index = currentCards.findIndex(c => c._id === id);
        if (index !== -1) {
            currentCards.splice(index, 1);
            saveToStorage();
            
            alert('Card deleted successfully');
            detailModal.classList.remove('active');
            fetchAllCandidatesFromDB();
        }
    }

    // ===== UI Functions =====
    function updateAllStats() {
        const total = currentCards.length;
        const present = currentCards.filter(c => getStatus(c.inTime, c.outTime) === 'green').length;
        const absent = total - present;
        
        const statsGrid = document.getElementById('mainStatsGrid');
        const statsFooter = document.getElementById('mainStatsFooter');
        
        if (statsGrid) {
            statsGrid.innerHTML = 
                `<div class="stat-item"><span class="count">${total}</span><span class="label">TOTAL</span></div>
                 <div class="stat-item"><span class="count">${present}</span><span class="label">PRESENT</span></div>
                 <div class="stat-item"><span class="count">${absent}</span><span class="label">ABSENT</span></div>`;
        }
        
        if (statsFooter) {
            statsFooter.innerHTML = present === total ?
                '<i class="fas fa-circle" style="color:#22c55e;"></i> सभी यूजर अंदर हैं' :
                '<i class="fas fa-circle" style="color:#f59e0b;"></i> कुछ यूजर बाहर हैं';
        }
    }

    function renderAllCards() {
        if (!container) return;
        
        container.innerHTML = '';
        
        let filtered = currentCards;
        const term = searchInput ? searchInput.value.trim().toLowerCase() : '';
        
        if (term) {
            filtered = currentCards.filter(c => String(c.siteNumber).toLowerCase().includes(term));
        }
        
        if (filtered.length === 0) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty-state';
            emptyDiv.innerHTML = '<i class="fas fa-user-large" style="font-size:2.8rem;"></i><h3>no matching seats</h3>';
            container.appendChild(emptyDiv);
        } else {
            filtered.forEach(c => container.appendChild(createCardElement(c)));
        }
        
        updateAllStats();
    }

    function createCardElement(data) {
        const card = document.createElement('div');
        card.className = 'library-card';
        card.dataset.id = data._id;
        card.dataset.site = data.siteNumber;
        
        const iconDiv = document.createElement('div');
        iconDiv.className = 'human-icon';
        iconDiv.innerHTML = '<i class="fas fa-user-tie"></i>';
        
        const status = getStatus(data.inTime, data.outTime);
        const circle = document.createElement('div');
        circle.className = `status-circle ${status === 'green' ? 'status-green' : 'status-red'}`;
        
        if (status === 'red') {
            if (!data.inTime || data.inTime.trim() === '') {
                circle.title = 'यूजर नहीं है';
            } else {
                const now = new Date();
                const currentHours = now.getHours();
                const currentMinutes = now.getMinutes();
                const currentTime = currentHours + currentMinutes / 60;
                const inTimeNum = convertTimeToNumber(data.inTime);
                
                if (currentTime < inTimeNum) {
                    circle.title = 'अभी टाइम नहीं हुआ';
                } else {
                    circle.title = 'टाइम आउट हो गया';
                }
            }
        } else {
            circle.title = 'यूजर अंदर है';
        }
        
        iconDiv.appendChild(circle);
        card.appendChild(iconDiv);
        
        const siteDiv = document.createElement('div');
        siteDiv.className = 'site-number';
        siteDiv.innerHTML = `<i class="fas fa-map-pin"></i> #${escapeHTML(data.siteNumber)}`;
        card.appendChild(siteDiv);
        
        card.addEventListener('click', () => showPopupDetails(data));
        return card;
    }

    function showPopupDetails(data) {
        currentDetailId = data._id;
        
        const payText = data.payment === 'paid' ? '✅ PAID' : '❌ UNPAID';
        const payBg = data.payment === 'paid' ? '#22c55e' : '#ef4444';
        const typeLabel = data.siteType === 'reservb' ? '🔖 Reserved' : '🟢 Normal';
        
        const status = getStatus(data.inTime, data.outTime);
        
        let statusText = '';
        if (status === 'green') {
            statusText = '✅ अंदर है';
        } else {
            if (!data.inTime || data.inTime.trim() === '') {
                statusText = '❌ यूजर नहीं है';
            } else {
                const now = new Date();
                const currentHours = now.getHours();
                const currentMinutes = now.getMinutes();
                const currentTime = currentHours + currentMinutes / 60;
                const inTimeNum = convertTimeToNumber(data.inTime);
                
                if (currentTime < inTimeNum) {
                    statusText = '❌ अभी टाइम नहीं हुआ';
                } else {
                    statusText = '❌ टाइम आउट हो गया';
                }
            }
        }
        
        const statusColor = status === 'green' ? '#22c55e' : '#ef4444';
        
        modalDetails.innerHTML = `
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-user-circle"></i> <strong>Candidate</strong> ${escapeHTML(data.name)}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-mobile-alt"></i> <strong>Mobile</strong> ${escapeHTML(data.mobile) || '—'}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-map-pin"></i> <strong>Site #</strong> ${escapeHTML(data.siteNumber)}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-tag"></i> <strong>Site Type</strong> ${typeLabel}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-calendar"></i> <strong>Date</strong> ${formatDate(data.date)}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-clock"></i> <strong>Shift</strong> ${escapeHTML(data.shift)}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-indian-rupee-sign"></i> <strong>Fee</strong> ₹${escapeHTML(data.fee)}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-credit-card"></i> <strong>Payment</strong> 
                <span style="background:${payBg}; color:white; padding:0.3rem 1.3rem; border-radius:60px;">${payText}</span>
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-sign-in-alt"></i> <strong>In time</strong> ${escapeHTML(data.inTime) || '—'}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0; border-bottom:1px solid #cde1ec;">
                <i class="fas fa-sign-out-alt"></i> <strong>Out time</strong> ${escapeHTML(data.outTime) || '—'}
            </div>
            <div style="display:flex; gap:0.8rem; padding:0.5rem 0;">
                <i class="fas fa-circle"></i> <strong>Status</strong> 
                <span style="background:${statusColor}; color:white; padding:0.3rem 1.3rem; border-radius:60px;">${statusText}</span>
            </div>
        `;
        
        detailModal.classList.add('active');
    }

    function updateStudentListTable() {
        const container = document.getElementById('studentListTableContainer');
        if (!container) return;
        
        let html = `
            <table class="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Seat #</th>
                        <th>Fee</th>
                        <th>Seat Type</th>
                        <th>Payment</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        currentCards.forEach(c => {
            const status = getStatus(c.inTime, c.outTime);
            
            let statusText = '';
            if (status === 'green') {
                statusText = 'Present';
            } else {
                if (!c.inTime || c.inTime.trim() === '') {
                    statusText = 'No user';
                } else {
                    const now = new Date();
                    const currentHours = now.getHours();
                    const currentMinutes = now.getMinutes();
                    const currentTime = currentHours + currentMinutes / 60;
                    const inTimeNum = convertTimeToNumber(c.inTime);
                    
                    if (currentTime < inTimeNum) {
                        statusText = 'Not time yet';
                    } else {
                        statusText = 'Time out';
                    }
                }
            }
            
            html += `
                <tr>
                    <td>${escapeHTML(c.name)}</td>
                    <td>${escapeHTML(c.siteNumber)}</td>
                    <td>₹${escapeHTML(c.fee)}</td>
                    <td>${c.siteType === 'reservb' ? 'Reserved' : 'Normal'}</td>
                    <td style="color:${c.payment === 'paid' ? '#22c55e' : '#ef4444'}; font-weight:600;">
                        ${c.payment === 'paid' ? '✅ PAID' : '❌ UNPAID'}
                    </td>
                    <td><span style="background:${status === 'green' ? '#2dd4bf' : '#f87171'}; color:white; padding:4px 10px; border-radius:20px; font-size:0.8rem;">
                        ${statusText}
                    </span></td>
                </tr>
            `;
        });
        
        html += `</tbody></table>`;
        
        if (currentCards.length === 0) {
            html = '<p style="text-align:center; padding:2rem;">No students found</p>';
        }
        
        container.innerHTML = html;
    }

    function updateSeatView() {
        const container = document.getElementById('seatGridContainer');
        if (!container) return;
        
        let html = '';
        const sortedCards = [...currentCards].sort((a, b) => a.siteNumber - b.siteNumber);
        
        sortedCards.forEach(c => {
            const status = getStatus(c.inTime, c.outTime);
            const isOccupied = status === 'green';
            html += `
                <div class="seat-item ${isOccupied ? 'occupied' : 'available'}" onclick="document.querySelector('[data-id=\'${c._id}\']').click()">
                    <div class="seat-number">#${escapeHTML(c.siteNumber)}</div>
                    <div class="seat-status">${isOccupied ? 'Present' : 'Absent'}</div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    function addCardFromPopup() {
        const name = popupName.value.trim();
        const date = popupDate.value.trim();
        const shift = popupShift.value;
        const siteType = popupSiteType.value;
        const fee = popupFee.value.trim();
        const mobile = popupMobile.value.trim();
        const manualSite = popupSite.value.trim();
        const inTime = popupIn.value.trim() || "09:00 AM";
        const outTime = popupOut.value.trim() || "05:00 PM";
        const payment = popupPaymentStatus.value;

        if (!name || !date || !fee || !mobile) {
            alert('Please fill all required fields');
            return;
        }

        let siteNumber;
        
        if (manualSite) {
            siteNumber = parseInt(manualSite, 10);
            if (isNaN(siteNumber) || siteNumber <= 0) {
                alert('Please enter a valid site number');
                return;
            }
        } else {
            const maxSite = currentCards.length > 0 
                ? Math.max(...currentCards.map(c => c.siteNumber)) 
                : 100;
            siteNumber = maxSite + 1;
        }

        const newCandidate = {
            name,
            date,
            shift,
            siteType,
            fee: Number(fee),
            mobile,
            siteNumber,
            inTime,
            outTime,
            payment
        };

        createCandidate(newCandidate);
    }

    function addCardFromSection() {
        const name = sectionName.value.trim();
        const date = sectionDate.value.trim();
        const shift = sectionShift.value;
        const siteType = sectionSiteType.value;
        const fee = sectionFee.value.trim();
        const mobile = sectionMobile.value.trim();
        const manualSite = sectionSite.value.trim();
        const payment = sectionPaymentStatus.value;
        const inTime = "09:00 AM";
        const outTime = "05:00 PM";

        if (!name || !date || !fee || !mobile) {
            alert('Please fill all required fields');
            return;
        }

        let siteNumber;
        
        if (manualSite) {
            siteNumber = parseInt(manualSite, 10);
            if (isNaN(siteNumber) || siteNumber <= 0) {
                alert('Please enter a valid site number');
                return;
            }
        } else {
            const maxSite = currentCards.length > 0 
                ? Math.max(...currentCards.map(c => c.siteNumber)) 
                : 100;
            siteNumber = maxSite + 1;
        }

        const newCandidate = {
            name,
            date,
            shift,
            siteType,
            fee: Number(fee),
            mobile,
            siteNumber,
            inTime,
            outTime,
            payment
        };

        createCandidate(newCandidate);
    }

    function filterByStatus(color) {
        if (searchInput) searchInput.value = '';
        renderAllCards();
        
        Array.from(container.children).forEach(card => {
            if (card.classList.contains('empty-state')) return;
            
            const cardId = card.dataset.id;
            const cardData = currentCards.find(c => c._id === cardId);
            
            if (cardData) {
                const status = getStatus(cardData.inTime, cardData.outTime);
                const isGreen = status === 'green';
                card.style.display = (color === 'green' && isGreen) || 
                                    (color === 'red' && !isGreen) ? 'flex' : 'none';
            }
        });
    }

    // ===== Event Listeners =====
    
    // Sidebar navigation
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            openSection(section);
        });
    });

    // Toggle sidebar
    const menuToggle = document.getElementById('menuToggleBtn');
    const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
    const customSidebar = document.getElementById('customSidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => customSidebar.classList.toggle('active'));
    }
    
    if (mobileSidebarToggle) {
        mobileSidebarToggle.addEventListener('click', () => customSidebar.classList.toggle('active'));
    }

    // Open create modal
    document.querySelectorAll('.create-candidate-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            createModal.classList.add('active');
        });
    });

    // Close modals
    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', () => createModal.classList.remove('active'));
    }
    
    if (closeDetailBtn) {
        closeDetailBtn.addEventListener('click', () => detailModal.classList.remove('active'));
    }

    // Close modal when clicking outside
    [createModal, detailModal].forEach(m => {
        if (m) {
            m.addEventListener('click', e => {
                if (e.target === m) m.classList.remove('active');
            });
        }
    });

    // Create buttons
    if (popupCreateBtn) {
        popupCreateBtn.addEventListener('click', e => {
            e.preventDefault();
            addCardFromPopup();
        });
    }

    if (sectionCreateBtn) {
        sectionCreateBtn.addEventListener('click', e => {
            e.preventDefault();
            addCardFromSection();
        });
    }

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', renderAllCards);
    }
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            renderAllCards();
        });
    }

    // Filter buttons
    if (filterIntime) {
        filterIntime.addEventListener('click', () => filterByStatus('green'));
    }
    
    if (filterOuttime) {
        filterOuttime.addEventListener('click', () => filterByStatus('red'));
    }

    // Payment update button
    if (detailToggleBtn) {
        detailToggleBtn.addEventListener('click', function() {
            if (currentDetailId) {
                const card = currentCards.find(c => c._id === currentDetailId);
                if (card) {
                    const newPayment = card.payment === 'paid' ? 'unpaid' : 'paid';
                    updatePayment(currentDetailId, newPayment);
                }
            }
        });
    }

    // Delete button
    if (deleteCardBtn) {
        deleteCardBtn.addEventListener('click', () => {
    if (currentDetailId) {
        if (confirm("Are you sure you want to delete this seat?")) {
            deleteCandidateFromDB(currentDetailId);
        }
    }
});
    }

    // Auto refresh every 30 seconds
    setInterval(() => {
        renderAllCards();
        updateStudentListTable();
        updateSeatView();
    }, 30000);

    // Initialize
    fetchAllCandidatesFromDB();
})();

// Calculator functions
let calcDisplay = document.getElementById('calcDisplay');
let calcCurrentInput = '';

function calcInput(num) {
    calcCurrentInput += num;
    if (calcDisplay) calcDisplay.textContent = calcCurrentInput;
}

function calcOperator(op) {
    calcCurrentInput += ' ' + op + ' ';
    if (calcDisplay) calcDisplay.textContent = calcCurrentInput;
}

function calcCalculate() {
    try {
        let result = eval(calcCurrentInput);
        calcCurrentInput = result.toString();
        if (calcDisplay) calcDisplay.textContent = result;
    } catch (e) {
        if (calcDisplay) calcDisplay.textContent = 'Error';
        calcCurrentInput = '';
    }
}

function calcClear() {
    calcCurrentInput = '';
    if (calcDisplay) calcDisplay.textContent = '0';
}

async function deleteCandidateFromDB(id) {
    try {
        const res = await fetch(`/api/candidates/delete/${id}`, {
            method: "DELETE"
        });

        const data = await res.json();

        if (!data.success) {
            alert(data.message);
            return;
        }

        alert("Seat deleted successfully");

        fetchAllCandidatesFromDB(); // refresh data
        detailModal.classList.remove('active');

    } catch (error) {
        console.error("Delete error:", error);
        alert("Server error. Please try again.");
    }
}


