import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";


/*by default all the pages are public but we can secruit aour pages here */

const isProtectedRoute = createRouteMatcher(["/settings(.*)"])

export default clerkMiddleware((auth,req)=>{
     if(isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
