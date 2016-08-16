class Diamond
  def self.make_diamond(letter)
    new(letter).draw_diamond
  end

  def initialize(letter)
    @letters = ('A'..letter).to_a
    grid_size = (@letters.length * 2) - 1
    @grid = Array.new(grid_size).map { Array.new(grid_size, ' ') }
  end

  def draw_diamond
    draw_line
    @grid.map!(&:reverse!)
    draw_line
    @grid.reverse!
    draw_line
    @grid.map!(&:reverse!)
    draw_line
    @grid.map(&:join).join("\n") + "\n"
  end

  private

  def draw_line
    line_index = @letters.length - 1

    @letters.each_with_index do |letter, index|
      @grid[index][line_index] = letter
      line_index += 1
    end
  end
end
