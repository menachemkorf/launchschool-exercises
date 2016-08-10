class PhoneNumber
  INVALID_NUMBER = '0000000000'.freeze

  attr_reader :number, :area_code

  def initialize(string)
    @input = string.gsub(/[^a-z0-9]/i, '')
    @number = format_number
    @area_code = @number[0..2]
  end

  def to_s
    "(#{area_code}) #{number[3..5]}-#{number[6..9]}"
  end

  private

  def format_number
    valid_number? ? @input[-10..-1] : INVALID_NUMBER
  end

  def valid_number?
    if @input.match(/[a-zA-Z]/) ||
       !@input.length.between?(10, 11) ||
       (@input.length == 11 && @input[0] != '1')
      false
    else
      true
    end
  end
end
