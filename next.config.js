module.exports = {
     async rewrites() {
         return [
           {
             source: '/api/:path*',
             destination: 'https://taxi-app-git-master-khaybees-projects.vercel.app/:path*',
           },
         ]
       },
   };