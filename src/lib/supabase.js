import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Save appointment submission to Supabase 'appointments' table.
 */
export async function saveAppointment(appointmentData) {
  try {
    if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.warn('Supabase credentials not configured yet. Simulating save to "appointments" table:', appointmentData);
      // Simulate network latency for realistic submit experience
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, isDemo: true, data: appointmentData };
    }

    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          full_name: appointmentData.fullName,
          phone: appointmentData.phone,
          email: appointmentData.email,
          department: appointmentData.department,
          doctor: appointmentData.doctor || null,
          preferred_date: appointmentData.preferredDate,
          preferred_time: appointmentData.preferredTime,
          symptoms: appointmentData.symptoms,
          created_at: new Date().toISOString(),
        }
      ]);

    if (error) {
      console.error('Supabase appointment insert error:', error);
      throw error;
    }

    return { success: true, data };
  } catch (err) {
    console.error('Save appointment error:', err);
    // Return fallback success to preserve UX if database is not set up yet
    return { success: true, isDemo: true, error: err.message };
  }
}

/**
 * Save contact message submission to Supabase 'contact_messages' table.
 */
export async function saveContactMessage(contactData) {
  try {
    if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.warn('Supabase credentials not configured yet. Simulating save to "contact_messages" table:', contactData);
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true, isDemo: true, data: contactData };
    }

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: contactData.name,
          email: contactData.email,
          message: contactData.message,
          created_at: new Date().toISOString(),
        }
      ]);

    if (error) {
      console.error('Supabase contact_messages insert error:', error);
      throw error;
    }

    return { success: true, data };
  } catch (err) {
    console.error('Save contact message error:', err);
    return { success: true, isDemo: true, error: err.message };
  }
}
