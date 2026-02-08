// FIXED AI ASTROLOGER CHATBOT - Better Keyword Detection
// Replace the generateAIResponse function in your HTML with this:

function generateAIResponse(question) {
    // Convert to lowercase for case-insensitive matching
    const lowerQ = question.toLowerCase();
    
    // Check for love/relationship keywords
    if (lowerQ.includes('love') || lowerQ.includes('relationship') || 
        lowerQ.includes('marriage') || lowerQ.includes('partner') || 
        lowerQ.includes('boyfriend') || lowerQ.includes('girlfriend') ||
        lowerQ.includes('dating') || lowerQ.includes('romance')) {
        return "🌹 In matters of the heart, Venus is guiding your path this month. " +
               "Your emotional intelligence and authentic communication will strengthen bonds. " +
               "If you're seeking love, focus on self-love first—the universe mirrors what you cultivate within. " +
               "For those in relationships, this is an excellent time for deeper conversations and shared experiences. " +
               "Trust your intuition when connecting with others.";
    }
    
    // Check for career/work keywords
    else if (lowerQ.includes('career') || lowerQ.includes('job') || 
             lowerQ.includes('work') || lowerQ.includes('promotion') || 
             lowerQ.includes('business') || lowerQ.includes('professional') ||
             lowerQ.includes('office') || lowerQ.includes('salary')) {
        return "💼 The planetary transits suggest promising professional opportunities ahead. " +
               "Jupiter's influence indicates growth through collaboration and mentorship. " +
               "Focus on building your skills and expanding your professional network. " +
               "This is a favorable period for taking calculated risks and presenting your ideas to leadership. " +
               "Your hard work and persistence will be recognized. Stay patient and strategic.";
    }
    
    // Check for health/wellness keywords
    else if (lowerQ.includes('health') || lowerQ.includes('wellness') || 
             lowerQ.includes('fitness') || lowerQ.includes('sick') || 
             lowerQ.includes('disease') || lowerQ.includes('body') ||
             lowerQ.includes('energy') || lowerQ.includes('tired')) {
        return "🌿 Your health is influenced by the Moon's current position in your chart. " +
               "Pay close attention to your body's signals and prioritize adequate rest. " +
               "Incorporate meditation, yoga, or gentle exercise to balance your energies. " +
               "Stay well-hydrated and maintain a consistent sleep schedule. " +
               "Consider adding more fresh fruits and vegetables to your diet. Your vitality will improve with mindful self-care.";
    }
    
    // Check for money/finance keywords
    else if (lowerQ.includes('money') || lowerQ.includes('finance') || 
             lowerQ.includes('wealth') || lowerQ.includes('invest') || 
             lowerQ.includes('saving') || lowerQ.includes('rich') ||
             lowerQ.includes('income') || lowerQ.includes('debt')) {
        return "💰 Saturn's influence suggests a conservative approach to finances is wise now. " +
               "Focus on long-term investments rather than quick gains. " +
               "This is an excellent time to review your budget and create sustainable financial plans. " +
               "Avoid impulsive spending and seek professional advice for major financial decisions. " +
               "Building a solid foundation now will lead to future prosperity.";
    }
    
    // Check for family keywords
    else if (lowerQ.includes('family') || lowerQ.includes('mother') || 
             lowerQ.includes('father') || lowerQ.includes('parent') || 
             lowerQ.includes('sibling') || lowerQ.includes('children') ||
             lowerQ.includes('home') || lowerQ.includes('relatives')) {
        return "🏠 Family relationships are highlighted in your chart this period. " +
               "The Moon's placement encourages nurturing connections with loved ones. " +
               "This is a favorable time for healing old wounds and strengthening family bonds. " +
               "Practice patience and empathy in family interactions. " +
               "Creating shared memories and traditions will bring lasting joy.";
    }
    
    // Check for education/learning keywords
    else if (lowerQ.includes('education') || lowerQ.includes('study') || 
             lowerQ.includes('exam') || lowerQ.includes('learning') || 
             lowerQ.includes('course') || lowerQ.includes('school') ||
             lowerQ.includes('university') || lowerQ.includes('knowledge')) {
        return "📚 Mercury's favorable position enhances your learning abilities now. " +
               "Your mind is sharp and receptive to new information. " +
               "This is an excellent time to pursue educational goals or develop new skills. " +
               "Focus on subjects that genuinely interest you for better retention. " +
               "Consistent study habits and seeking mentorship will accelerate your progress.";
    }
    
    // Check for travel keywords
    else if (lowerQ.includes('travel') || lowerQ.includes('journey') || 
             lowerQ.includes('trip') || lowerQ.includes('vacation') || 
             lowerQ.includes('abroad') || lowerQ.includes('foreign')) {
        return "✈️ Jupiter's influence on your 9th house suggests favorable conditions for travel. " +
               "Long-distance journeys or spiritual pilgrimages are especially beneficial now. " +
               "Travel will bring new perspectives and opportunities for personal growth. " +
               "If planning international trips, ensure all documents are in order. " +
               "Stay open to unexpected adventures and cultural experiences.";
    }
    
    // Check for spiritual/life purpose keywords
    else if (lowerQ.includes('spiritual') || lowerQ.includes('purpose') || 
             lowerQ.includes('meaning') || lowerQ.includes('meditation') || 
             lowerQ.includes('destiny') || lowerQ.includes('soul') ||
             lowerQ.includes('karma') || lowerQ.includes('enlightenment')) {
        return "🕉️ You are entering a spiritually significant phase of your journey. " +
               "The cosmos invites you to deepen your connection with your inner self. " +
               "Regular meditation and introspection will reveal important insights about your life purpose. " +
               "Trust the process of spiritual awakening even when the path seems unclear. " +
               "Your higher consciousness is guiding you toward your true calling.";
    }
    
    // Check for future/prediction keywords
    else if (lowerQ.includes('future') || lowerQ.includes('prediction') || 
             lowerQ.includes('will happen') || lowerQ.includes('when will') || 
             lowerQ.includes('what will') || lowerQ.includes('forecast')) {
        return "🔮 The future unfolds based on your present actions and choices. " +
               "The stars show favorable planetary alignments in the coming months, " +
               "suggesting growth and positive developments in areas you focus your energy. " +
               "Rather than waiting for destiny, actively create your desired future through intention and effort. " +
               "Trust that the universe supports your highest good.";
    }
    
    // Check for luck keywords
    else if (lowerQ.includes('luck') || lowerQ.includes('fortune') || 
             lowerQ.includes('lucky') || lowerQ.includes('chance')) {
        return "🍀 Your luck is influenced by Jupiter's current transit through your chart. " +
               "Opportunities often appear disguised as challenges—stay alert and positive. " +
               "Your fortunate periods align with new moon and full moon phases. " +
               "Wearing green or yellow colors can enhance your luck this month. " +
               "Remember: you create your own luck through preparation meeting opportunity.";
    }
    
    // Default response for general questions
    else {
        return "✨ The cosmos is aligning in your favor. Trust the journey you're on. " +
               "Each challenge is an opportunity for growth and self-discovery. " +
               "Focus on your inner wisdom and stay aligned with your authentic path. " +
               "The universe supports those who act with intention and integrity. " +
               "If you have specific questions about love, career, health, or finances, feel free to ask!";
    }
}

// TEST THE FUNCTION:
console.log("Testing AI Chatbot Responses:");
console.log("\nTest 1 - Love:", generateAIResponse("Will I find love?"));
console.log("\nTest 2 - Career:", generateAIResponse("What about my career?"));
console.log("\nTest 3 - Money:", generateAIResponse("How is my financial situation?"));
console.log("\nTest 4 - Health:", generateAIResponse("What about my health?"));
console.log("\nTest 5 - General:", generateAIResponse("Hello"));
