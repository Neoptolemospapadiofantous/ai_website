import { useEffect, useCallback } from 'react';

interface TrackingEvent {
  event: string;
  section: string;
  action?: string;
  value?: string | number;
}

export const useAboutPageTracking = () => {
  // Track page view
  useEffect(() => {
    trackEvent({
      event: 'page_view',
      section: 'about_us'
    });
  }, []);

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scroll depths
        if (scrollPercent >= 25 && maxScroll < 25) {
          trackEvent({ event: 'scroll_depth', section: 'about_us', value: 25 });
        } else if (scrollPercent >= 50 && maxScroll < 50) {
          trackEvent({ event: 'scroll_depth', section: 'about_us', value: 50 });
        } else if (scrollPercent >= 75 && maxScroll < 75) {
          trackEvent({ event: 'scroll_depth', section: 'about_us', value: 75 });
        } else if (scrollPercent >= 90 && maxScroll < 90) {
          trackEvent({ event: 'scroll_depth', section: 'about_us', value: 90 });
        }
      }
    };

    const throttledTrackScrollDepth = throttle(trackScrollDepth, 500);
    window.addEventListener('scroll', throttledTrackScrollDepth);
    
    return () => window.removeEventListener('scroll', throttledTrackScrollDepth);
  }, []);

  const trackEvent = useCallback((eventData: TrackingEvent) => {
    // In a real application, you would send this to your analytics service
    // For now, we'll log to console in development
    if (import.meta.env.DEV) {
      console.log('Analytics Event:', eventData);
    }
    
    // Example implementations for different analytics services:
    
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventData.event, {
        section: eventData.section,
        action: eventData.action,
        value: eventData.value
      });
    }
    
    // Custom analytics endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(eventData)
    // });
  }, []);

  const trackSectionView = useCallback((sectionName: string) => {
    trackEvent({
      event: 'section_view',
      section: 'about_us',
      action: 'view',
      value: sectionName
    });
  }, [trackEvent]);

  const trackCTAClick = useCallback((ctaName: string, destination: string) => {
    trackEvent({
      event: 'cta_click',
      section: 'about_us',
      action: ctaName,
      value: destination
    });
  }, [trackEvent]);

  const trackTeamMemberView = useCallback((memberName: string) => {
    trackEvent({
      event: 'team_member_view',
      section: 'about_us',
      action: 'view_profile',
      value: memberName
    });
  }, [trackEvent]);

  const trackEngagement = useCallback((engagementType: string, duration?: number) => {
    trackEvent({
      event: 'engagement',
      section: 'about_us',
      action: engagementType,
      value: duration
    });
  }, [trackEvent]);

  return {
    trackSectionView,
    trackCTAClick,
    trackTeamMemberView,
    trackEngagement,
    trackEvent
  };
};

// Utility function to throttle scroll events
function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
}
