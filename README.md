🚀 Unified Inbox

A backend-first system that aggregates, processes, and prioritizes notifications across platforms using an event-driven architecture.

✨ Overview

Unified Inbox transforms scattered notifications into a single intelligent feed.

Instead of switching between apps, users get:

A centralized view
Ranked notifications
Reduced noise
⚡ Features
📥 Multi-Source Aggregation
Collect notifications from different platforms via extension
🧠 Priority-Based Ranking
Automatically ranks notifications based on importance
⚙️ Asynchronous Processing
Queue-based architecture for scalable event handling
🧹 Deduplication Engine
Prevents duplicate notifications across sources
🔐 Secure API Layer
JWT authentication + rate limiting
🏗️ Architecture
Client (Extension)
        ↓
API Server
        ↓
Queue (Redis / BullMQ)
        ↓
Workers (Processing Layer)
        ↓
Database (PostgreSQL)
        ↓
Client Feed
🧠 How It Works
Extension captures notifications
Data is sent to backend API
Events are pushed to queue
Workers process:
Normalize
Rank
Deduplicate
Notifications are stored and served
🛠️ Tech Stack
Backend
Node.js
Express
PostgreSQL
Redis
BullMQ
Extension
Chrome Extension (Manifest v3)
📂 Project Structure
backend/
  ├── controllers/
  ├── services/
  ├── workers/
  ├── queues/
  ├── models/

extension/
  ├── content/
  ├── background/
  ├── popup/
🚀 Getting Started
1. Clone the repository
git clone https://github.com/DhruvMansotraa/Unified-Inbox
cd Unified-Inbox
2. Setup Backend
cd backend
npm install

Create .env file:

PORT=5000
DATABASE_URL=your_postgres_url
REDIS_URL=your_redis_url
JWT_SECRET=your_secret

Run the server:

npm run dev
3. Setup Extension
cd extension
npm install
npm run build
Open Chrome → Extensions
Enable Developer Mode
Click "Load unpacked"
Select /extension/build
🧪 Example Notification
{
  "source": "gmail",
  "content": "Interview scheduled",
  "priority": 9,
  "actionRequired": true
}
🎯 Goals
Build a scalable backend system
Demonstrate event-driven architecture
Handle real-world notification noise
📈 Future Improvements
Real-time updates (WebSockets)
ML-based prioritization
Notification analytics dashboard
Multi-device sync
⚠️ Limitations
Some platforms restrict data access
DOM scraping may break on UI updates
📄 License

MIT

💬 Straight Talk

This version is:

Cleaner
Structured like a product
Easy to scan
Backend-focused
