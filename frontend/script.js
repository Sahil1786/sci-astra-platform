async function fetchCourses() {
    const response = await fetch('http://localhost:5000/api/courses');
    const courses = await response.json();
    const coursesContainer = document.getElementById('courses');
    
    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.className = 'course';
      courseDiv.innerHTML = `
        <h2>${course.title}</h2>
        <p>Discount: ${course.discount}%</p>
        <button onclick="selectCourse('${course._id}')">Purchase</button>
      `;
      coursesContainer.appendChild(courseDiv);
    });
  }
  
  async function selectCourse(courseId) {
    const paymentMethod = prompt('Enter payment method (credit card/debit card/UPI):');
    const response = await fetch('http://localhost:5000/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId, paymentMethod })
    });
    const result = await response.json();
    alert(result.message);
  }
  
  fetchCourses();
  