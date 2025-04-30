"use client"

import { createClient } from '@supabase/supabase-js'
import { useState, FormEvent } from 'react' // Add FormEvent import
import styles from './styles.module.css'
import Footer from "../components/footer"
import { motion, AnimatePresence } from 'framer-motion'

const supabaseUrl = 'https://pnjauvsmrirjjxddgapd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuamF1dnNtcmlyamp4ZGRnYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4OTk2NDQsImV4cCI6MjA2MTQ3NTY0NH0.-ue8lx8dm4qmdwELNOS3VabHFnkHMw47kDGtDZKZXzM'
const supabase = createClient(supabaseUrl, supabaseKey)

interface FormState {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { // Add proper type
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setStatus('')

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            created_at: new Date().toISOString(),
            submitted_at: '2025-04-29 18:42:27', // Updated with current time
            user_id: 'draken197413'
          }
        ])

      if (error) {
        throw new Error(error.message)
      }

      setStatus('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`)
      } else {
        setStatus('An unexpected error occurred. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const formGroupVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div 
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className={styles.pageContainer}>
        <motion.div 
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.formContainer}>
            <motion.div 
              className={styles.header}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className={styles.title}>Contact Us</h1>
              <p className={styles.subtitle}>
                Send us a message and we'll get back to you soon
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Type your message here..."
                  required
                  disabled={isSubmitting}
                  rows={5}
                />
              </motion.div>

              <motion.button 
                type="submit" 
                className={styles.button}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`${styles.status} ${
                      status.includes('success') ? styles.success : styles.error
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  )
}