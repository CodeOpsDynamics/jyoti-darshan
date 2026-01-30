import streamlit as st
import datetime
import random
import time

# --- DATA ---
SIGNS = ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius']
SYMBOLS = ['♑','♒','♓','♈','♉','♊','♋','♌','♍','♎','♏','♐']

# --- LOGIC FUNCTIONS ---

def get_sun_sign_index(dob):
    # JavaScript: month is 0-11. Python: month is 1-12.
    month_idx = dob.month - 1 
    day = dob.day
    sun_idx = month_idx
    if day > 20:
        sun_idx = (sun_idx + 1) % 12
    return sun_idx

def generate_intelligent_response(message):
    msg = message.lower()
    
    # Category: Love
    if any(word in msg for word in ['love', 'relationship', 'romance', 'partner']):
        if any(word in msg for word in ['find', 'meet']):
            return "Venus is entering a favorable position in your chart. The next 2-3 months bring heightened opportunities for romantic connections. Focus on social activities and authentic self-expression. Love often arrives when we're genuinely ourselves."
        if any(word in msg for word in ['ex', 'back']):
            return "The cosmic patterns suggest this is a time for reflection rather than reunion. Before reconnecting with the past, ask yourself: have the core issues been resolved? Mercury retrograde can bring people back, but true growth requires addressing root causes."
        return "Your relationship sector is activated. If you're in a partnership, open communication is essential. Single? The universe is preparing you for meaningful connection. Work on self-love first—your external relationships mirror your internal state."

    # Category: Career/Money
    if any(word in msg for word in ['career', 'job', 'work', 'business', 'money', 'financial']):
        if any(word in msg for word in ['change', 'new', 'switch', 'start']):
            return "Jupiter is supporting career expansion and new opportunities. This is indeed a favorable time for professional change, especially if you've felt stagnant. Ensure you're moving toward something, not just away."
        if any(word in msg for word in ['promotion', 'raise']):
            return "The 10th house of career is highlighted. This is an excellent period to showcase your achievements and initiate conversations about advancement. Saturn rewards those who demonstrate consistent value."
        return "Your professional sector shows strong activity. Financial opportunities are emerging, but they require strategic action. Focus on skill development, building genuine relationships, and demonstrating leadership."

    # Specific Signs (Same text as your JS)
    sign_responses = {
        'aries': "Aries energy is bold, pioneering, and courageous. Ruled by Mars, you're naturally driven to lead. Challenge: impatience. Channel that fierce energy into purposeful action.",
        'taurus': "Taurus brings grounded, sensual, and determined energy. Ruled by Venus, you appreciate stability. Challenge: resistance to change. Embrace flexibility while honoring your security.",
        'gemini': "Gemini energy is curious and adaptable. Ruled by Mercury, you thrive on mental stimulation. Your gift is connecting ideas. Challenge: scattered focus. Try to go deep, not just wide.",
        'cancer': "Cancer brings nurturing and intuitive energy. Ru
