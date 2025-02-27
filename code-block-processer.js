document.addEventListener('DOMContentLoaded', function() {
    // Find all pre elements with markdown content
    const preElements = document.querySelectorAll('pre');
    
    preElements.forEach(pre => {
      // Get the content of the pre tag
      const content = pre.innerHTML;
      
      // Check if it contains markdown code blocks
      if (content.includes('```')) {
        // Process the markdown
        const processed = marked.parse(content);
        
        // Replace the content
        pre.outerHTML = processed;
      }
    });
    
    // Add syntax highlighting
    if (window.Prism) {
      Prism.highlightAll();
    }
  });