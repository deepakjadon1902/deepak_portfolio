import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, Copy, Github, Linkedin, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageIntro from '@/components/PageIntro';
import FlipText from '@/components/FlipText';
import { profile } from '@/data/portfolio';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const change = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(previous => ({ ...previous, [event.target.name]: event.target.value }));
    setError('');
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    if (!form.name.trim() || !form.message.trim()) { setError('Please enter your name and a message.'); return; }
    setSending(true); setError('');
    try {
      await emailjs.send('service_8r71maa', 'template_24zgst5', {
        from_name: form.name.trim(), from_email: form.email.trim(),
        subject: form.subject.trim() || 'Portfolio inquiry', message: form.message.trim(), to_name: profile.name,
      }, { publicKey: 'hRvRaFAOHU2s1ZEeZ' });
      setSent(true); setForm(initialForm);
    } catch {
      setError('Your message could not be sent. Please try again, or email me directly using the address alongside this form.');
    } finally { setSending(false); }
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  };
  return <main id="main" tabIndex={-1}>
    <div className="shell page-shell contact-page">
      <PageIntro eyebrow="Contact" title={<>Let’s talk<span className="accent">.</span></>} description="Have a project to discuss or a role in mind? Send a message, or reach me directly by email." />
      <div className="contact-layout">
        <aside className="contact-details">
          <span className="availability">
            <i />Open to remote & freelance work</span>
          <h2><FlipText>Get in touch.</FlipText></h2>
          <p>Share a few details about what you need, your timeline, and how I can help.</p>
          <div className="contact-methods">
            <div>
              <Mail size={20} />
              <div>
                <span className="mono">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15} />
                </a>
              </div>
              <button className="icon-link" onClick={copyEmail} aria-label={copied ? 'Email address copied' : 'Copy email address'}>{copied ? <Check size={16} /> : <Copy size={16} />}</button>
            </div>
            <div>
              <Phone size={20} />
              <div>
                <span className="mono">Phone</span>
                <a href={profile.phoneLink}>{profile.phone}<ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div>
              <MapPin size={20} />
              <div>
                <span className="mono">Location</span>
                <p>Mathura, Uttar Pradesh, India</p>
                <span className="contact-timezone">India Standard Time · UTC +05:30</span>
              </div>
            </div>
          </div>
          <p className="copy-status" role="status">{copied ? 'Email address copied to clipboard.' : copyError ? 'Select the email address above to copy it.' : ''}</p>
          <div className="contact-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} />GitHub <ArrowUpRight size={14} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>
        <div className="contact-form-panel">{sent ? <div className="success-state" role="status">
          <span>
            <CheckCircle2 size={34} strokeWidth={1.5} />
          </span>
          <p className="eyebrow">THANKS FOR REACHING OUT</p>
          <h2><FlipText>Message received.</FlipText></h2>
          <p>Thanks for sharing a little about your project. I’ll read your message and get back to you by email.</p>
          <button className="button button-secondary" onClick={() => setSent(false)}>Send another message <ArrowRight size={16} />
          </button>
        </div> : <form onSubmit={submit} aria-label="Project inquiry" aria-busy={sending}>
          <div className="form-heading">
            <span className="mono">Send a message</span>
            <span className="mono">* Required</span>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Your name <span>*</span>
              </label>
              <input id="name" name="name" autoComplete="name" placeholder="Your full name" value={form.name} onChange={change} required minLength={2} maxLength={120} disabled={sending} />
            </div>
            <div className="field">
              <label htmlFor="email">Email address <span>*</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={change} required maxLength={254} disabled={sending} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">Subject <span className="optional">Optional</span>
            </label>
            <input id="subject" name="subject" placeholder="A project, a role, a collaboration…" value={form.subject} onChange={change} maxLength={200} disabled={sending} />
          </div>
          <div className="field">
            <label htmlFor="message">Your message <span>*</span>
            </label>
            <textarea id="message" name="message" placeholder="Tell me about the project, your goals, and any timeline you have in mind." value={form.message} onChange={change} required minLength={10} maxLength={5000} rows={5} disabled={sending} />
          </div>{error && <p className="form-error" role="alert">{error}</p>}<button type="submit" className="button form-submit" disabled={sending}>{sending ? <>
            <Loader2 size={17} className="animate-spin" />Sending your message…</> : <>Send message <ArrowUpRight size={18} />
          </>}</button>
          <p className="form-note">Sent via EmailJS. Your contact details and message are used to respond to your inquiry.</p>
        </form>}</div>
      </div>

    </div>
  </main>;
}
