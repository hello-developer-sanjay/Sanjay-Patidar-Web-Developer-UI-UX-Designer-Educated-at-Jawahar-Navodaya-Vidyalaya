from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time
import threading
import os

# Path to your ChromeDriver executable
chrome_driver_path = os.getenv('CHROME_DRIVER_PATH', '/usr/local/bin/chromedriver')

# Set up Chrome options
chrome_options = Options()
chrome_options.add_argument("--start-maximized")

# Function to perform Google search and navigate to target URL
def google_search_navigate(search_query, target_title, target_url):
    # Set up the Chrome driver
    service = Service(chrome_driver_path)
    driver = webdriver.Chrome(service=service, options=chrome_options)
    
    try:
        # Open Google
        driver.get("https://www.google.com")
        
        # Wait for the page to load
        time.sleep(2)
        
        # Perform the Google search
        search_box = driver.find_element(By.NAME, "q")
        search_box.send_keys(search_query)
        search_box.send_keys(Keys.RETURN)
        
        # Wait for the search results to load
        time.sleep(3)
        
        page = 1
        max_pages = 5  # Define the maximum number of pages to navigate through
        
        while page <= max_pages:
            # Find the target URL in search results and click it
            search_results = driver.find_elements(By.CSS_SELECTOR, 'a h3')
            for result in search_results:
                if target_title in result.text:
                    parent = result.find_element(By.XPATH, "./..")
                    href = parent.get_attribute("href")
                    if target_url in href:
                        parent.click()
                        driver.get(target_url)
                        break
            else:
                try:
                    # Go to the next page of Google search results
                    next_button = driver.find_element(By.XPATH, "//a[@id='pnnext']")
                    next_button.click()
                    time.sleep(3)
                    page += 1
                    continue
                except Exception as e:
                    print(f"No more pages or an error occurred: {e}")
                    break
            break
        
        # Wait for the target page to load
        time.sleep(3)
        
        # Perform the automation tasks (scrolling, checking for ads)
        perform_automation_tasks(driver)
        
    finally:
        # Close the browser
        driver.quit()

# Function to perform automation tasks on the target website
def perform_automation_tasks(driver):
    # Check for ads within iframes
    iframes = driver.find_elements(By.TAG_NAME, "iframe")
    for iframe in iframes:
        try:
            driver.switch_to.frame(iframe)
            ad_elements = driver.find_elements(By.CSS_SELECTOR, 'a')  # Ad links usually have <a> tags
            if ad_elements:
                ad_url = ad_elements[0].get_attribute('href')
                driver.switch_to.default_content()
                driver.execute_script(f"window.open('{ad_url}', '_blank');")
                time.sleep(5)  # Wait for the ad to load
                break
            driver.switch_to.default_content()
        except Exception as e:
            print(f"Failed to interact with ad in iframe: {e}")
            driver.switch_to.default_content()
    
    # Smooth scroll to the bottom of the page
    smooth_scroll(driver)

def smooth_scroll(driver):
    scroll_pause_time = 0.05  # Pause between scrolls (50ms for smooth effect)
    screen_height = driver.execute_script("return window.innerHeight;")
    scroll_height = driver.execute_script("return document.body.scrollHeight;")
    
    for i in range(0, scroll_height, screen_height // 10):
        driver.execute_script(f"window.scrollTo(0, {i});")
        time.sleep(scroll_pause_time)
    
    # Ensure we reach the bottom of the page
    driver.execute_script(f"window.scrollTo(0, {scroll_height});")

# Search queries and target titles
search_tasks = [
     ("Sanjay Patidar Neemuch", "Sanjay Patidar | Web Developer & UI/UX Designer", "https://sanjay-patidar.vercel.app/"),
   ("Sanjay Patidar blogs", "EduXcel | Explore Tech Insights: Featured Blogs", "https://sanjay-patidar.vercel.app/blogs"),
#       ("VS Code Introduction", "Introduction to Visual Studio Code (VS Code) | Overview", "https://sanjay-patidar.vercel.app/vs_code_articles/introduction-to-visual-studio-code-vs-code-overview-features-history-usage"),
      ("Contact Sanjay Patidar", "Contact Sanjay Patidar | Web Developer & UI/UX Designer", "https://sanjay-patidar.vercel.app/contact"),
   ("Sanjay Patidar Resume", "Sanjay Patidar | Web Developer Resume", "https://sanjay-patidar.vercel.app/resume"),
#    ("Eduxcel", "EduXcel | Empowering Careers in Tech", "https://eduxcel.vercel.app"),
#    ("Eduxcel Signup", "Secure Signup", "https://eduxcel.vercel.app/signup"),

]

# Number of times to repeat the process
repeat_count = 5

def start_search_task(search_query, target_title, target_url):
    for _ in range(repeat_count):
        google_search_navigate(search_query, target_title, target_url)
        time.sleep(1)  # Add a small delay between repetitions

# Create and start threads for parallel execution
threads = []
for search_query, target_title, target_url in search_tasks:
    thread = threading.Thread(target=start_search_task, args=(search_query, target_title, target_url))
    threads.append(thread)
    thread.start()

# Wait for all threads to complete
for thread in threads:
    thread.join()
