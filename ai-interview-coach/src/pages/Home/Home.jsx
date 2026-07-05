import Navbar from '../../components/layout/Navbar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [email, setEmail] = useState('')

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", margin: 0, padding: 0 }}>

      {/* ── Navbar ── */}
      <nav style={{
        background: '#6B1A33',
        padding: '14px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ color: '#fff', fontSize: 17, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
          🧠 AI Interview Coach
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/login" style={{
            color: '#fff', textDecoration: 'none',
            padding: '7px 20px',
            border: '1px solid rgba(255,255,255,0.35)',
            borderRadius: 8, fontSize: 14
          }}>Login</Link>
          <Link to="/register" style={{
            color: '#6B1A33', textDecoration: 'none',
            background: '#FFD6A5',
            padding: '7px 20px',
            borderRadius: 8, fontSize: 14, fontWeight: 600
          }}>Register</Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #6B1A33 0%, #8B2040 45%, #4A0E22 100%)',
        padding: '90px 40px 100px',
        textAlign: 'center',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#FFD6A5',
          padding: '5px 16px',
          borderRadius: 999, fontSize: 13, marginBottom: 24
        }}>
          ✨ Powered by AI
        </div>

        <h1 style={{ color: '#fff', fontSize: 46, fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
          Crack Interviews with
        </h1>
        <h1 style={{ color: '#fff', fontSize: 46, fontWeight: 700, lineHeight: 1.2, margin: '4px 0 0' }}>
          Your Own{' '}
          <span style={{ color: '#FFD6A5' }}>AI Tutor</span>
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.72)', fontSize: 17,
          margin: '20px auto 36px', lineHeight: 1.7,
          maxWidth: 480
        }}>
          Practice real mock interviews, get instant AI feedback,
          and build the confidence to land your dream job.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/register" style={{
            background: '#FFD6A5', color: '#4A0E22',
            textDecoration: 'none',
            padding: '13px 30px', borderRadius: 9,
            fontSize: 15, fontWeight: 700,
            display: 'inline-flex', alignItems: 'center', gap: 7
          }}>
            ▶ Start Free
          </Link>
          <a href="#how-it-works" style={{
            background: 'rgba(255,255,255,0.1)', color: '#fff',
            textDecoration: 'none',
            padding: '13px 30px', borderRadius: 9,
            fontSize: 15,
            border: '1px solid rgba(255,255,255,0.25)',
            display: 'inline-flex', alignItems: 'center', gap: 7
          }}>
            👁 See how it works
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: 48, marginTop: 56, flexWrap: 'wrap'
        }}>
          {[
            { num: '10,000+', label: 'Interviews practiced' },
            { num: '85%',     label: 'Success rate' },
            { num: '50+',     label: 'Job roles covered' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ color: '#FFD6A5', fontSize: 26, fontWeight: 700 }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#FFF0F4', color: '#8B2040',
            padding: '4px 14px', borderRadius: 999, fontSize: 12,
            fontWeight: 600, marginBottom: 12, letterSpacing: '0.5px'
          }}>
            ⭐ WHAT YOU GET
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' }}>
            Everything to ace your interview
          </h2>
          <p style={{ color: '#666', fontSize: 15, margin: 0 }}>
            Role-specific practice, real-time AI coaching, and detailed progress tracking.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20, maxWidth: 900, margin: '0 auto'
        }}>
          {[
            { icon: '💬', title: 'AI Questions',       desc: 'Dynamic questions tailored to your target role and experience level.' },
            { icon: '💡', title: 'Instant Feedback',   desc: 'Get actionable suggestions on your answers the moment you finish.' },
            { icon: '📈', title: 'Progress Tracking',  desc: 'See your scores, weak topics, and improvement over time.' },
            { icon: '🏆', title: 'Score Reports',      desc: 'Detailed post-interview breakdowns to guide your next session.' },
          ].map(f => (
            <div key={f.title} style={{
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: 14, padding: '24px 20px',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#8B2040'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(107,26,51,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#eee'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 46, height: 46,
                background: '#FFF0F4', borderRadius: 10,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 22,
                marginBottom: 16
              }}>{f.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ padding: '72px 40px', background: '#fafafa' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#FFF0F4', color: '#8B2040',
            padding: '4px 14px', borderRadius: 999, fontSize: 12,
            fontWeight: 600, marginBottom: 12, letterSpacing: '0.5px'
          }}>
            ✅ HOW IT WORKS
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' }}>
            Ready in 3 simple steps
          </h2>
          <p style={{ color: '#666', fontSize: 15, margin: 0 }}>
            No setup needed. Jump in and start practicing immediately.
          </p>
        </div>

        <div style={{
          display: 'flex', gap: 0,
          maxWidth: 720, margin: '0 auto',
          flexWrap: 'wrap', justifyContent: 'center'
        }}>
          {[
            { num: '1', title: 'Pick your role',    desc: 'Choose from MERN, React, Backend, DSA, System Design, and more.' },
            { num: '2', title: 'Answer questions',  desc: 'Face realistic interview questions in a focused timed session.' },
            { num: '3', title: 'Get AI feedback',   desc: 'Receive your score, weak spots, and tips to improve fast.' },
          ].map((step, i) => (
            <div key={step.num} style={{
              flex: '1', minWidth: 180, textAlign: 'center',
              padding: '0 24px',
              borderRight: i < 2 ? '1px solid #e5e5e5' : 'none'
            }}>
              <div style={{
                width: 44, height: 44,
                background: '#6B1A33', color: '#fff',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 700,
                margin: '0 auto 16px'
              }}>{step.num}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{step.title}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '80px 40px',
        background: 'linear-gradient(135deg, #6B1A33 0%, #8B2040 100%)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 700, margin: '0 0 12px' }}>
          Ready to Practice?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, margin: '0 0 32px' }}>
          Start your first AI interview today — it's completely free.
        </p>

        <div style={{
          display: 'flex', gap: 10, justifyContent: 'center',
          flexWrap: 'wrap', maxWidth: 460, margin: '0 auto'
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              flex: 1, minWidth: 200,
              padding: '12px 16px',
              borderRadius: 9, border: 'none',
              background: 'rgba(255,255,255,0.13)',
              color: '#fff', fontSize: 15, outline: 'none',
            }}
          />
          <Link to="/register" style={{
            background: '#FFD6A5', color: '#4A0E22',
            textDecoration: 'none',
            padding: '12px 24px', borderRadius: 9,
            fontSize: 15, fontWeight: 700,
            whiteSpace: 'nowrap'
          }}>
            Get Started →
          </Link>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 14 }}>
          No credit card required · Cancel anytime
        </p>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: '#1a1a1a', color: 'rgba(255,255,255,0.55)',
        textAlign: 'center', padding: '18px 40px', fontSize: 13
      }}>
        © 2026 AI Interview Coach · All rights reserved
      </footer>

    </div>
  )
}

export default Home
