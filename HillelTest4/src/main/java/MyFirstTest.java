import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class MyFirstTest {

    public static WebDriver driver;
    @Test

    public void login() throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\John\\Desktop\\QA Hillel\\chromedriver_win32\\chromedriver.exe");
   driver= new ChromeDriver();
           driver.manage().window().maximize();
        driver.get("http://users.bugred.ru/user/login/index.html");
        driver.findElement(By.name("login")).sendKeys("justtesting26@gmail.com");
        driver.findElement(By.name("password")).sendKeys("12345678");
        driver.findElement(By.xpath("/html/body/div[3]/div[1]/div[1]/form/table/tbody/tr[3]/td[2]/input")).click();
        WebElement users= driver.findElement(By.xpath("//*[@id=\"main-menu\"]/ul/li[1]/a/span"));
        Assert.assertEquals(true, users.isDisplayed());
        driver.findElement(By.xpath("/html/body/div[3]/form/table/tbody/tr[4]/td/input")).sendKeys("mickmolty2");
        driver.findElement(By.xpath("/html/body/div[3]/form/table/tbody/tr[5]/td[1]/button")).click();
        driver.findElement(By.xpath("//*[@id=\"fat-menu\"]/a")).click();
        driver.findElement(By.xpath("//*[@id=\"fat-menu\"]/ul/li[1]/a")).click();
        driver.findElement(By.xpath("/html/body/div[3]/div[1]/div/div[2]/form/table/tbody/tr[6]/td[2]/textarea")).sendKeys("chess, brazilian jiu jitsu, tabletop games, yoga");
        driver.findElement(By.xpath("/html/body/div[3]/div[1]/div/div[2]/form/table/tbody/tr[8]/td[2]/input")).click();

    }
}
