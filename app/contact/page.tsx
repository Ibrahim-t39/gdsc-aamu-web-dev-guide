"use client";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Improved header with animated element */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get in Touch
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to join GDSC AAMU? We're here to help you succeed.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>
      
      {/* Main content */}
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all hover:shadow-2xl">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Information
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            If you have any questions or need assistance, please don't hesitate to reach out to us through any of these channels:
          </p>
          
          <ul className="space-y-8">
            <li className="flex items-center transform transition-all duration-300 hover:translate-x-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-blue-600 dark:text-blue-400 block text-lg">Email</span>
                <a href="mailto:gdsc@aamu.edu" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg">
                  gdsc@aamu.edu
                </a>
              </div>
            </li>
            
            <li className="flex items-center transform transition-all duration-300 hover:translate-x-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-green-600 dark:text-green-400 block text-lg">Slack</span>
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  Join our GDSC AAMU Slack workspace
                </span>
              </div>
            </li>
            
            <li className="flex items-center transform transition-all duration-300 hover:translate-x-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.17 6.84 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.37-1.343-3.37-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.89 1.53 2.34 1.09 2.91.833.09-.648.35-1.086.634-1.337-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.03-2.688-.104-.253-.448-1.27.096-2.648 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 5.43c.85.004 1.705.115 2.504.337 1.91-1.296 2.747-1.027 2.747-1.027.546 1.38.202 2.398.1 2.652.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.942.36.31.678.92.678 1.856 0 1.338-.012 2.42-.012 2.75 0 .268.18.58.688.48A10.019 10.019 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-red-600 dark:text-red-400 block text-lg">GitHub</span>
                <a 
                  href="https://github.com/gdsc-aamu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors text-lg"
                >
                  github.com/gdsc-aamu
                </a>
              </div>
            </li>
          </ul>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
            <p className="text-gray-600 dark:text-gray-300">
              We're here to help you succeed in your project contributions. Don't hesitate to ask for clarification or
              guidance when needed.
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced social links */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-6">Connect With Us</h3>
        <div className="flex justify-center space-x-6">
          {[
            {
              path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
              name: "Twitter"
            },
            {
              path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
              name: "LinkedIn"
            },
            {
              path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              name: "GitHub"
            }
          ].map((item, i) => (
            <a 
              key={i} 
              href="#" 
              className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
              aria-label={item.name}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={item.path} />
              </svg>
              <span className="sr-only">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}