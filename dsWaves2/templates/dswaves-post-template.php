<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package DSWaves2 Post Template
 */

get_header(); ?>
<?php
?>
        <main id="main" class="site-main mb-32">

        <?php
        while ( have_posts() ) : the_post();?>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>  >
            <div class="dsw-container dsw-m-auto dsw-pt-20 dsw-pb-10">
                <header>   
                    <h1 class="dsw-text-5xl dsw-text-center dsw-p-10"><?php the_title(); ?></h1>
                </header>
            </div>

                <?php 
                $url = $_SERVER['HTTP_HOST'];
                $syncID = get_post_meta( get_the_ID(), 'dsWavesID', true); 
                $postType = get_post_type(get_the_ID());
       
                if($postType == 'post') {
                    $pageURL = '/wp-content/plugins/dsWaves2/website-content/json/Post/'.$syncID.'.json';
                }
                if($postType == 'learning') {
                    $pageURL = '/wp-content/plugins/dsWaves2/website-content/json/Knowledgebase-Article/'.$syncID.'.json';
                }

                $fullUrl = $_SERVER['DOCUMENT_ROOT'] . $pageURL;
                $content_json = file_get_contents($fullUrl);  
                $content_json_data = json_decode($content_json, true);
                //print_r ($content_json_data); exit ();
                
                // $brandURL = '/wp-content/plugins/dsWaves2/website-content/json/Brand/'. $content_json_data['brand_id'].'.json';
                // $brand_json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . $brandURL);  
                // $brand_json_data = json_decode($brand_json, true);
                
                
                // $primaryColor = $brand_json_data['primary_colors'][0]['color'];
                // $secondaryColor = $brand_json_data['secondary_colors'][0]['color'];
                
                ?>

                <link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/content/app.css">
                
                <div id="app"></div>
                
                <script>
                const pageurl = '<?php echo $pageURL; ?>';
                const jsonData = '<?php echo base64_encode (json_encode ($content_json_data)); ?>';
                </script>
                
                <script src='/wp-content/plugins/dsWaves2/website-content/templates/main/content/app.js' defer></script>
            
            </article><!-- #post-<?php the_ID(); ?> -->


        <?php 	endwhile; // End of the loop. ?>

        </main><!-- #main -->
<?php
get_footer();
